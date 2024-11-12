---
title: "Chapter 05 - Create your own LLM assistant"
date: 2023-15-05T10:35:35-06:00
subtitle: ""
tags: ["Research"]
dropCap: false
displayInMenu: false
displayInList: true
draft: false
resources:
- name: ActionButtons
  src: "buttons.json"
---
<div class="hidde-after-preview">
In Chapter 5, you will head into generative Large Language Models (LLMs) and how to fine-tune them. With Retreival Augmented Generation (RAG) you create a specialized assistant that serves as a companion for robot programming.

For Entering Chapter five click here:
<a class="btn btn-success" target="_blank" href="chapter5/"><b>Chapter 5!</b></a>
</div>

<!--more-->

<h1> Welcome to the fifth day of our hands-on course!</h1>
Today, you will head into generative Large Language Models (LLMs) and how to fine-tune them. With Retreival Augmented Generation (RAG) you create a specialized assistant that serves as a companion for robot programming. The software used is completely open-source and can be installed on your personal machines. For this course we offer the webservice <a href="https://ragflow.io/">RAGflow</a>, utilizing models from OLLaMA to digest and extend its knowledge.

**Goal**: By the end of this session, you will know how to fine-tune an existing LLM with a knowledgebase in the fashion of RAG, and define the assistants behavior through (initial) prompt-engineering.

## Prerequisites
- Participation in <a href="https://vib.ai.uni-bremen.de/page/fallschool/chapter2/">Chapter 2 - PyCRAM lecture</a>
- Download <a href="https://nc.uni-bremen.de/index.php/s/W86jfpykMRAwaWp">documentation files in TXT or PDF</a>

## A-priori survey

How experienced would you consider yourself with AI assistants? https://particify.zmml.de/p/73823831


## Theoretical Background

In this lecture we use the Large Language Model **LLaMA3.2**, an openly available and pre-trained model by Meta, designed to be extended for research purposes. We prime the model with **initial instructions** and extend its knowledge with **Retreival Augmented Generation**.

**Large Language Models** (LLMs) have been trained on the vast array of text available on the internet, and optimized to generate natural language in various styles and formats. There are multiple ways to change the behavior a model. Improvements are done by specializing a base model for a specific domain, its task, and how it should act. Example foundational models are GPT, BERT, T5, DALL-E and LLaMA. This chapter uses LLaMA.

**Fine-Tuning** is the general act of adding more knowledge to an existing LLM and specializing its purpose. Pre-trained LLMs are available in masses, but they are trained to respond with general knowledge about a broad field. To fine-tune a model, a relatively small but crucial set of knowledge is added to the model. Similarly, to make an LLM suitable as a tool for a specific task, its focus needs to be set straight. In this chapter, fine-tuning is achieved by giving an LLM the teaching-material for online courses on how to work with the PyCRAM architecture, authored by the architects.

**Initial instructions** specify how the assistant is meant to behave. Here are a few points that prime an assistant:

1. Define the Purpose and Scope
2. Specify Tone and Style
3. Provide Example Prompts and Responses
4. Incorporate Ethical and Safety Guidelines
5. Highlight Desired Behavior and Limitation
6. Set Specific Formatting or Structure Requirements
7. Include Feedback Mechanisms

Examples are given in the practical part.

**Prompt engineering** is the ongoing extension of the initial instructions: request (prompt), response and refinement, such that the answer eventually contains the most desireable content, scope and depth of information. This can reach from the answers length, writing style, to strict datastructures in program code or json-objects. The more precise the request, the better the answer. To refine the answer, keep the context of the conversation, refer back to the LLMs answer, so to specify in what way the current answer is unsatisfying, and provide constraints on how to improve the answer. With few-shot examples the prompts can be given more context, which again makes the answer more specific, therefore, make the request more specific regarding what the LLM should focus on in its response by giving it the knowledge required.

**Training** Requires a lot of example data as request and response. Most available models are already pre-trained for a sepcific purpose and ready to use.

**Retreival-Augmented Generation (RAG)** is a way to extend the knowledge of the LLM by giving it structured knowledge about the domain, in our case: the lecture material for PyCRAM. This specializes the LLM
to its specific usecase, defining what kind of tool the LLM is used as. For example, when the LLM is provided with program code and explanatory documentation, it can answer just like a teacher, explaining the program and refine their answer on demand. 


## Set up your RAGFlow

Go to http://ibis.informatik.uni-bremen.de and create an account.


### Link the Ollama chat model

1. Go to your profile in the top-right corner
2. From the list on the left select `Model Providers`
3. Select Ollama

<div style="display: flex; justify-content: space-between;">
  <img src="img/ragflow_instruction_1.png" alt="RAGFlow add Ollama model" style="width: 90%;"/>
  <!--img src="img/boxy.webp" alt="Image 2" style="width: 45%;"/-->
</div>

4. In the pop-up, enter the following fields:
* Model type: chat
* Model name: llama3.2:3b
* Base url: http://ollama:11434

<img src="img/ragflow_instruction_2.png" alt="RAGFlow add the llama3.2 model" style="width: 70%;"/>

Hit OK. There should now be Ollama showing in the list.

### Set model defaults

Set the default chat model to the freshly added link to llama3.2:3b

<img src="img/ragflow_instruction_3.png" alt="RAGFlow add the llama3.2 model" style="width: 80%;"/>

Hit OK and the defaults should be set just right!

## Create a Knowledge Base

Download <a href="https://nc.uni-bremen.de/index.php/s/W86jfpykMRAwaWp">the necessary teaching material here</a>. 

## Create a chat

TODO PLAY AROUND WITH CHAT

## Intermediate Survey


## Do Initial Instructions


## Summary


## Posterior Survey

2. **Introduction to RAGflow**: What is Retreival Augmented Generation and how can you set it up for any kind of application you need?
3. **Discuss first impressions**: Gather our first ideas on strength and weakness of generative LLMs and RAG.
4. **Refine your assistant**: Exceed boundaries and try to break the system, explore creative ways of forming your assistant.
5. **Share experiences**: Condense the experience we made by sharing them with your peers.




Enter RAGFlow
---
http://ibis.informatik.uni-bremen.de








## Summary
By the end of this session you will have experience with the difficulties of configuring your own assistant, and in what ways fine-tuning can change the assistants behavior.

## Congratulations on Completing the Course!
You’ve successfully completed the hands-on course on cognition-enabled robotics, gaining valuable insights into each step of the robot's tasks.

## Further Reading/Exercises
- TBD

Example Videos
---

<figure class="video_container">
  <iframe width="100%" height="360" src="https://www.youtube.com/embed/another_video_id?si=j3CB2Sj4itd_1qlC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>
</figure>

<div class="main-well-flex-container" style="margin:20px;align-items: center;">
  <div style="flex:30%;">
      <img src="img/arthur.jpg" style="clip-path: circle(35%);">
  </div>
  
  <div style="flex:70%;">
       <h3> Arthur Niedzwiecki</h3>
    Tel:  +49 421 218 64033 <br>
    Mail:     <a href="mailto:aniedz@cs.uni-bremen.de">aniedz@cs.uni-bremen.de</a> <br>
      <a style="color:red" href="https://ai.uni-bremen.de/team/arthur_niedzwiecki">
      <span style="font-size: 15px;">Profile Arthur Niedzwiecki</span>
    </a>
  </div>
</div>

<div class="main-well-flex-container" style="margin:20px;align-items: center;">
  <div style="flex:30%;">
      <img src="img/vanessa.jpg" style="clip-path: circle(35%);">
  </div>

  <div style="flex:70%;">
       <h3> Vanessa Hassouna</h3>
    Tel:  +49 421 218 99651 <br>
    Mail:     <a href="mailto:hassouna@cs.uni-bremen.de">hassouna@cs.uni-bremen.de</a> <br>
      <a style="color:red" href="https://ai.uni-bremen.de/team/vanessa_hassouna">
      <span style="font-size: 15px;">Profile Vanessa Hassouna</span>
    </a>
  </div>
</div>


<div class="main-well-flex-container" style="margin:20px;align-items: center;">
  <div style="flex:30%;">
      <img src="img/jonas_dech_head.jpg" style="clip-path: circle(35%);">
  </div>

  <div style="flex:70%;">
    <h3> Jonas Dech</h3>
    Tel: +49 421 218 64024 <br>
    Mail: <a href="mailto:jdech@uni-bremen.de">jdech@uni-bremen.de</a> <br>
    <a style="color:red" href="https://ai.uni-bremen.de/team/jonas_dech">
        <span style="font-size: 15px;">Profile Jonas Dech</span>
    </a>
  </div>
</div>


<div class="main-well-flex-container" style="margin:20px;align-items: center;">

  <div style="flex:30%;">
      <img src="../mbeetza.jpg" style="clip-path: circle(35%);">
  </div>

  <div style="flex:70%;">
       <h3> Prof. Michael Beetz PhD</h3>
    Tel:  +49 421 218 64001 <br>
    Mail:     <a href="mailto:beetz@cs.uni-bremen.de">beetz@cs.uni-bremen.de</a> <br>
      <a style="color:red" href="https://ai.uni-bremen.de/team/michael_beetz">
      <span style="font-size: 15px;">Profile Michael Beetz</span>
    </a>
  </div>
</div>

