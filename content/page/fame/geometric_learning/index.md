---
title: "Geometric Deep Learning"
date: 2025-02-01T00:00:00-00:00
subtitle: ""
tags: ["Fame", "Innovation"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
---

Across many scientific fields, researchers study problems in which the observed data has an inherent **non-Euclidean structure**. While deep-learning models have been particularly successful when dealing with an underlying Euclidean structure, over the years there has been a growing interest in trying to apply learning on non-Euclidean geometric data. Such kinds of data arise in numerous applications. For instance, in social networks, sensor networks, genetics and  neuroscience, graph models are widely adopted. Furthermore, in computer graphics and vision, 3-D objects are modeled as Riemannian manifolds. **Geometric Deep Learning (GDL)** techniques attempt to generalize (structured) deep neural models to non-Euclidean domains, such as graphs and manifolds. 

What proves to be even more interesting though, is that even when the input data is Euclidean, evidence has been gathered towards justifying that its latent space representation might not be. This is known as the **"manifold hypothesis"**, according to which, many high dimensional datasets can be represented by low-dimensional latent manifolds immersed into the higher dimensional space. Some works going towards this direction are the ones from [Arvanitidis](https://doi.org/10.48550/arXiv.1710.11379) and [Hauberg](https://doi.org/10.48550/arXiv.2008.00565). They showed, in the context of Variational Autoencoders, that enriching the latent space with a geometric structure (e.g. Riemannian Manifolds with an added stochastic perturbation) *leads to better variance estimates and interpretability of the models used*. 

Prominent applications of GDL in Robotics are mainly concerned with motion learning, as in [Jianfeng Gao et al.](https://doi.org/10.1109/TRO.2023.3286074), [Tilman Daab et al.](https://doi.org/10.48550/arXiv.2312.08030), [Noémie Jaquier et al.](https://doi.org/10.48550/arXiv.2210.01672), [Weitao Wang et al.](https://doi.org/10.1109/ACCESS.2022.3217800), [Byeongho Lee et al.](https://proceedings.mlr.press/v229/lee23a.html), where *the emphasis is put on learning motion primitives* (i.e. compact representations of robot skills that can be learned from demonstrations and combined into complex behaviors) by leveraging on the inherent structure and symmetries in the data.

**Symmetries** in data are extremely useful, as they reduce the total number of parameters needed in order to construct a valid model and lead to better interpretations of the studied phenomena. Some newer examples in this direction were given by [Beatrice Acciaio et al.](https://doi.org/10.1111/mafi.12389) which *approximated causal maps* and their relative geometric nature over any arbitrarily long but finite time horizon, and [Ahmed Elhag et al.](https://doi.org/10.48550/arXiv.2410.17878) introduced **equivariance** *as a learning objective*, to control the approximate level of equivariance in the model.

In all the previous cases, the latent space produced by the various DL frameworks has always been formalized as a Riemannian manifold with, at most, an easy to compute stochastic perturbation (e.g. standard normal distributed data multiplied by a certain standard deviation) added on top of it. However, as the intrinsic nature of the unknown data generating process is highly stochastic, one could wish for more faithful representations of it, and subsequently, of the generated latent space as well. 

Thus, one could choose to not limit themselves to Riemannian manifolds, but explore the potential applications of **Information manifolds** (i.e. manifolds with a dualistic structure, defined by a pair of conjugate connections coupled with a metric tensor, that provides a dual parallel transport that preserves the metric), thus using tools from **Information Geometry** (good references to the subject are: [Amari 2016](https://link.springer.com/book/10.1007/978-4-431-55978-8), [Nihat Ay, et al.](https://link.springer.com/book/10.1007/978-3-319-56478-4), and [Frank Nielsen](https://www.mdpi.com/1099-4300/22/10/1100) for a more concise introduction). Since Information manifolds can be constructed starting from any divergence function, one could thus define **non-Riemannian manifolds** on which points represent probability distributions and compute "distances" between them using appropriate "metric" tensors  (not proper metrics in the mathematical sense) defined by the chosen divergence. 


## Connection with FAME

### Main Goal

- Extract the inner representation (i.e. latent space) of what happens in real-life
- Construct an abstract model that helps in understanding and using such representations
  - Use geometric constraints (Information Manifolds) to choose among the different possible models
  - Make this process as explainable as possible by leveraging on symmetries (move from black boxes to gray ones)

### Sub Tasks

- Latent Space Regularization for Structured Task Representation
- Manifold Hypothesis for Non-Linear Task Learning
- Symmetry-Aware Learning (Invariance & Equivariance)
- Information Geometry for Task Representation & Decision-Making


### Challenges

- Many different choices to best represent the data
- Different regularization criteria
- Ensuring certain structural properties is not straightforward (e.g. invariance and equivariance)
- Optimizing Information Geometry algorithms (such as Natural Gradient Descent) might not be feasible for every problem


### Relevancy

- Latent Space Regularization:
  - One-shot learning by ensuring that minor variations in input (e.g., different pouring styles) still map to similar latent representations
  - Improves task generalization, meaning the robot can infer new actions based on nearby tasks in the latent space
- Manifold Hypothesis:
  - Better generalization across task variations, as the robot can interpolate between observed actions
  - Improved mental simulation, as task-specific manifolds provide a structured space where action outcomes can be predicted smoothly
  - More robust learning from demonstration (LfD) by mapping demonstrations onto a meaningful latent manifold instead of a high-dimensional, unstructured space
- Symmetry-Aware Learning:
  - Helps robots recognize task equivalences (e.g., stirring with different motions but achieving the same effect)
  - Improves the ability to contextualize ambiguous instructions by leveraging invariant structures in tasks
- Information Geometry:
  - Improves mental simulation accuracy by embedding uncertainty in task predictions
  - Allows for better adaptive planning where the robot selects the best course of action based on probabilistic reasoning

### Possible Solutions

- Group-equivariant Graph Neural Networks (GNNs) for learning transformation equivariant features.
- Lie algebra-based representations for task symmetry modeling
- Fisher Information Geometry for uncertainty-aware decision-making
- Optimal Transport on statistical manifolds for adaptive task planning
- Geometric Bayesian inference for causal reasoning


## Navigate to FAME Parts

<div>
  For Detailed information on the differents parts of FAME click:<br>
  <div class="btn-group" style="width:100%">
    <a class="btn btn-primary" style="width:100%;" target="_blank" href="../"><b>FAME Main Page</b></a>
  </div>
  <div class="btn-group" style="width:100%">
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../perception"><b>Object Perception</b></a>
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../scene_understanding"><b>Scene Understanding</b></a>
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../probabilistic_learning"><b>Probabilistic Learning</b></a>
  </div>
  <div class="btn-group" style="width:100%">
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../motion_control"><b>Motion Control</b></a>
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../geometric_learning"><b>Geometric Deep Learning</b></a>
    <a class="btn btn-success" style="width:33.3%;" target="_blank" href="../enviroment"><b>Environment Generation</b></a>
  </div>
</div>
<br>


## Authors

{{< author name="Alessandro Santonicola" img="../main/img/santonicola.jpg" mail="ale_san@uni-bremen.de" profile="https://ai.uni-bremen.de/team/alessandro_santonicola" >}}

