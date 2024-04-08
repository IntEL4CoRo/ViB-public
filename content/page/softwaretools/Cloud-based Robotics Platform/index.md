---
title: "Cloud-based Robotics Platform"
date: 1999-01-27T14:33:42-04:00
subtitle: "binder.intel4coro.de"
tags: ["Infrastructure", "Binderhub", "Cloud-based"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
---

We present a cloud-based robotics platform for teaching and training concepts of cognitive robotics. Instead of forcing interested learners or students to install a new operating system and bulky, fragile software onto their personal laptops, just to solve tutorials or coding assignments of a single lecture on robotics, it would be beneficial to avoid technical setups and directly dive into the content of cognitive robotics. To achieve this, we utilize the cloud service [Binderhub](https://github.com/jupyterhub/binderhub) to deploy and operate containerized applications, including robotics simulation environments and software collections based on the Robot Operating System (ROS). The web-based Integrated Development Environment [JupyterLab](https://jupyterlab.readthedocs.io/en/latest/) is integrated with RvizWeb and XPRA to provide real-time visualization of sensor data and robot behavior in a user-friendly environment for interacting with robotics software. The proposed platform is a valuable tool for education and research in cognitive robotics and it has the potential to democratize access to these fields. The platform has already been successfully employed in various academic courses, demonstrating its effectiveness in fostering knowledge and skill development.

Platform address: https://binder.intel4coro.de/

<div class="hidde-after-preview">
  For Detailed information click
  <a class="btn btn-success" target="_blank" href="cloud-based-robotics-platform"><b>here!</b></a>
</div>

<!--more-->


# Zero-to-Binder

> Note: This tutorial covers only the usage of the platform, and is modified from the [official binder manual](https://the-turing-way.netlify.app/communication/binder/zero-to-binder.html). For more information about the architecture, use, and setup of BinderHub, see the [BinderHub documentation](https://binderhub.readthedocs.io/en/latest/) and our [installation guide](https://github.com/IntEL4CoRo/docker-stacks/blob/binderhub/README.md).

## Requirements

1. **A GitHub account.** Please sign up for one if you don't have one: https://github.com/signup
1. Know how to use `Git`: [Getting started with Git](https://docs.github.com/en/get-started/getting-started-with-git)
1. Basic knowledge of [Docker](https://docs.docker.com/get-started/).

## Create a Hands-on Tutorial from Scratch

One of the usage scenarios is to create hands-on tutorials when organizing a workshop. And you don't want participants wasting time installing the software on their laptops.
In this tutorial, we will take the workshop "[EASE Fall School 2021 - NEEMs and KnowRob](https://github.com/sasjonge/ease_fs_neems_2021/)" as an example. Previously, the participants had to install `Docker` and `docker-compose`, and start the Jupyterlab environment on their laptops before starting the hands-on tutorials. At the end of this tutorial, you will create the same hands-on tutorial running on the cloud server. Every participant can start a Jupyterlab environment with just a URL.

### 1. Creating a repo to Binderize

Create a repo from our template repo, this template repo creates an environment integrated with ROS noetic, Jupyterlab, and some ROS web tools.

- Go to the template repo page: <a href="https://github.com/IntEL4CoRo/binder-template" target="_blank">IntEL4CoRo/binder-template</a>
  ![create-repo](./create-repo.png)
- Create a new repo from this template, 
- Make sure the repo is **public, not private!**
- You can name your repo as you like.

#### Why does the repo have to be public?

binder.intel4coro.de cannot access private repositories as this would require a secret token. Your repo shouldn't include git submodules with private SSH URLs as well.

### 2. Launch your repo

Go to **<a href="https://binder.intel4coro.de" target="_blank">binder.intel4coro.de</a>**

- Type the GitHub repository name in the "GitHub repository name or URL" box. The name should be in such format:

  **YOUR-USERNAME/YOUR-REPO-NAME**
  ![binder](./binder.png)

- As you type, the webpage generates a link in the "Copy the URL below..." box
    It should look like this:
    > https://binder.intel4coro.de/v2/gh/YOUR-USERNAME/YOUR-REPO-NAME/HEAD
 This is the URL to start a JupyterLab environment for your repo.

- Copy it, open a new browser tab, and visit that URL or click the "Launch" button
  - You will see a "spinner" as Binder launches the repo
If everything runs smoothly, you'll see a JupyterLab interface. (It will take a longer time for the first launch.)

While you wait, BinderHub (the backend of Binder) is:

- Fetching your repo from GitHub
- Analyzing the contents
- Building a Docker image based on your repo
- Launching that Docker image in the cloud
- Connecting you to it via your browser

Now you have launched a JupyterLab environment running on the cloud. See "[The JupyterLab Interface](https://jupyterlab.readthedocs.io/en/3.6.x/user/interface.html)" to know more about JupyterLab. Under the folder "notebooks", you can find the notebook `turtlesim.ipynb` which is to test if the ROS is installed properly.

### 3. Modify your repo

With the previous steps, you have created a Github repo and launched it on the cloud server. That showcases the basic idea of the Binderhub, turning your Github repo into an interactive web application.

Next, we will add the [KnowRob Jupyter notebooks](https://github.com/sasjonge/ease_fs_neems_2021/tree/master/lectures) to the repo, and tell the BinderHub to set up a runtime environment with the following software installed which are mentioned in [Knowrob's documentation](https://knowrob.github.io/knowrob/):

- [KnowRob](https://knowrob.github.io/knowrob/)
- [jupyter-knowrob](https://github.com/sasjonge/jupyter-knowrob)
- [SWI Prolog](https://www.swi-prolog.org/)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)
- [ROS noetic](https://wiki.ros.org/noetic) (Already installed in the base environment)

Before making changes to the repo we need to know about the two folders and files that are currently in the repo:

- `README.md`: A `markdown` file to write documentation.
- `notebooks`: A folder to place the tutorial Jupyter notebooks.
- `binder`: contains files configuring the runtime environment.
  - `Dockerfile`: the main file for configuring the environment. If you have absolutely no idea what Dockerfile is, please take a few minutes to read the [dockerfile best practices](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/).
  - `entrypoint.sh`: a bash script defines the startup programs. For example, the default environment will start the `ROS core` and the `rvizweb` when the environment is launched.
  - `docker-compose.yml`: only for testing the environment on your local computer, this file will have no effect on Binderhub.

#### Follow the steps below to set up a KnowRob environment

> Note: The following steps will assume you know how to use `Git`.

1. Add Jupyter notebooks to folder `notebooks`, simply download the notebooks from repo [ease_fs_neems_2021](https://github.com/sasjonge/ease_fs_neems_2021/tree/master/lectures).
1. The downloaded notebooks require some external resources under the folder [prolog](https://github.com/sasjonge/ease_fs_neems_2021/tree/master/prolog), so we also need to copy the whole `prolog` folder to the repo.

1. Copy the following installation instructions to the `binder/Dockerfile` (inside the block "Install extra software packages"):

    ```Docker
    #============= Install extra software packages =============#
    # Install SWI Prolog 
    # Source: https://www.swi-prolog.org/build/PPA.html
    USER root
    RUN apt install -y software-properties-common && \
      apt-add-repository -y ppa:swi-prolog/stable
    RUN apt update && \
      apt install -y swi-prolog
    ENV SWI_HOME_DIR=/usr/lib/swi-prolog

    # Install MongoDB Community Edition
    # Source: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/#std-label-install-mdb-community-ubuntu
    ARG MONGODEB_VERSION=4.4
    RUN curl -fsSL https://www.mongodb.org/static/pgp/server-${MONGODEB_VERSION}.asc | \
        gpg -o /usr/share/keyrings/mongodb-server-${MONGODEB_VERSION}.gpg --dearmor
    RUN echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-${MONGODEB_VERSION}.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/${MONGODEB_VERSION} multiverse" | \
        tee /etc/apt/sources.list.d/mongodb-org-${MONGODEB_VERSION}.list
    RUN apt update && apt install -y mongodb-org
    RUN mkdir -p /data/db && \
        chown -R ${NB_USER}:users /data/db 

    # Install Knowrob
    # Source: https://knowrob.github.io/knowrob/
    USER ${NB_USER}
    WORKDIR ${ROS_WS}/src
    RUN wstool merge https://raw.github.com/knowrob/knowrob/master/rosinstall/knowrob-base.rosinstall && \
        wstool update

    # Switch to root user to install ROS dependencies
    # Source: http://wiki.ros.org/rosdep
    USER root
    RUN rosdep update && rosdep install -y -r --ignore-src --from-paths . && \
        rosdep fix-permissions

    # Install jupyter knowrob kernel
    # Source: https://github.com/sasjonge/jupyter-knowrob
    USER ${NB_USER}
    WORKDIR ${HOME}
    RUN git clone https://github.com/sasjonge/jupyter-knowrob.git --recurse-submodules
    RUN cd jupyter-knowrob && pip install .
    ARG JK_KERNEL=${HOME}/.local/share/jupyter/kernels/jknowrob
    RUN mkdir -p ${JK_KERNEL} && \
        cp jupyter-knowrob/kernel.json ${JK_KERNEL}
    RUN cp -R ${HOME}/jupyter-knowrob/knowrob_cloud ${ROS_WS}/src/
    COPY --chown=${NB_USER}:users prolog /prolog

    # Build catkin workspace
    # Source: https://catkin-tools.readthedocs.io/en/latest/verbs/catkin_build.html
    USER ${NB_USER}
    WORKDIR ${ROS_WS}
    RUN catkin build

    # Download the example neem data
    USER root
    RUN mkdir /neem_data && chown ${NB_USER}:users /neem_data
    USER ${NB_USER}
    RUN cd /neem_data && \
        wget https://seafile.zfn.uni-bremen.de/f/b66a71b257084d459b6c/?dl=1 -O example_neem.zip && \
        unzip example_neem.zip && \
        mv example_neem/* ./ && \
        rm -r example_neem example_neem.zip
    #===========================================================#
    ```

    The main purpose of this step is to write the installation process of the software required to run Knowrob into Dockerfile instructions. The installation methods for each software are listed in the comments. The Dockerfile instructions are similar to Linux `shell` commands, the main difference is, they start with keywords like `RUN`, `WORKDIR`, and `USER`. For more details of these Dockerfile instructions can be found in docs [Dockerfile instructions](https://docs.docker.com/develop/develop-images/instructions/). A docker container is basically a Linux environment, so containerizing a repo is writing a series of Linux operations explicitly to the `Dockerfile`. Therefore, the primary requirement for writing Dockerfile instructions is knowing how to use the [Linux command line](https://ubuntu.com/tutorials/command-line-for-beginners#1-overview).

1. Launch KnowRob once the environment starts, copy the following code to `binder/entrypoint.sh` (before the command `exec "$@"`):

    ```bash
    # Start MongoDB and save data on working directory
    MONGODB_URL=mongodb://127.0.0.1:27017
    mongod --fork --logpath ${HOME}/mongod.log

    # Create a symbolic link to the folder neem_data
    ln -s /neem_data ${PWD}/neem_data

    # Launch Knowrob
    export KNOWROB_MONGODB_URI=${MONGODB_URL}/?appname=knowrob
    roslaunch --wait knowrob knowrob.launch &
    ```

1. Commit all the changes and push the updates to GitHub.
1. Now your repo should be similar to this [completed repo](https://github.com/yxzhan/knowrob-example).

Open the launch URL, if you forgot the URL just repeat "[Launch your repo](#2-launch-your-repo)".

### 4. Changing the Interface

To directly open a Jupyter Notebook, you can add url parameter `labpath` or `urlpath`. The difference between these two parameters is, that `labpath` will start Jupyterlab in a simple mode, which displays only the notebook. And `urlpath` is much more flexible, and allows the Jupyterlab to open in a more complex UI, with multiple tabs open or a custom web application.

**Examples of URL parameters:**

- Open single notebook: https://binder.intel4coro.de/v2/gh/yxzhan/knowrob-example.git/main?labpath=notebooks/tut2-semweb.ipynb

- Open notebook in the multi-tab interface: https://binder.intel4coro.de/v2/gh/yxzhan/knowrob-example.git/main?urlpath=lab/tree/notebooks/tut2-semweb.ipynb

- Open a custom web application(remote desktop): https://binder.intel4coro.de/v2/gh/yxzhan/knowrob-example.git/main?urlpath=xprahtml5/index.html

## Now over to you!

Now you've binderized a repo, it's time to binderize the example script and data you brought along!

**Some useful links:**

- Choosing languages:
  - **<https://mybinder.readthedocs.io/en/latest/howto/languages.html>**
- Configuration files:
  - **<https://mybinder.readthedocs.io/en/latest/using/config_files.html>**
- Example Binder repos:
  - **<https://mybinder.readthedocs.io/en/latest/sample_repos.html>**
- Getting data:
  - With `wget`: **<https://github.com/binder-examples/getting-data>**
  - With `quilt`: **<https://github.com/binder-examples/data-quilt>**
  - From remote storage: **<https://github.com/binder-examples/remote_storage>**

**Advanced usage patterns:**

- Separating content from envorinment with `nbgitpuller` to reduced rebuilds:
  - **<https://discourse.jupyter.org/t/tip-speed-up-binder-launches-by-pulling-github-content-in-a-binder-link-with-nbgitpuller/922>**
- Tips for reducing the start-up time of your repository:
  - **<https://discourse.jupyter.org/t/how-to-reduce-mybinder-org-repository-startup-time/4956>**

