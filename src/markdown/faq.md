---
path: "/faq"
date: "2018-05-22"
title: "Frequently Asked Questions"
---

# Frequently Asked Questions

## GENERAL QUESTIONS
### What are OpenLaw’s products?

OpenLaw offers a robust toolkit for building and managing commercial relationships.  Some of our product offerings include:

First Draft | Rapidly automate any legal agreement
Sign and Store | Electronically store signatures and evidence of executed contracts
Forms and Flow | Customize workflows
Token Forge & Components | Tokenize and transfer assets
Relayer | Seamless integration

To learn more about how you or your business can benefit from integrating OpenLaw’s toolkit into your system check out our Products page or reach out at [hello@openlaw.io](mailto:hello@openlaw.io).

### How do I get started with OpenLaw?
 
Go to openlaw.io and click on ‘Sign Up for OpenLaw.’  Once you create an account, you will be able to gain access to our legal agreement repository.  For step-by-step instructions, please see [here](https://medium.com/@OpenLawOfficial/openlaw-tutorial-blockchain-enabled-legally-enforceable-smart-contracts-24d5654050fa) or for a video tutorial click [here](https://www.useloom.com/share/4b052dc290b940239161e4d350ccc139).

### How to I integrate with OpenLaw?

OpenLaw is built to be hyper-generic and malleable.  With OpenLaw’s API, you can effortlessly integrate OpenLaw with your system.  If you are interested in integrating OpenLaw, please contact us at [hello@openlaw.io](mailto:hello@openlaw.io).

### I want to become a member of the OpenLaw community.  How can I join?
 
If you are interested in becoming a member of the OpenLaw community, please join our [Community Slack](https://openlaw-community.slack.com/join/shared_invite/enQtMzY1MTA2ODY3ODg5LTc0ZGQ4OTEwMDEyMGUxMzJmMDVmNzM1ODRmNTdkNDIyNDkyOGU0NmRkMmRlMmY3ZTMwYzNlOTFiMzUwZjJkOTk).
 
### I’m interested in building and contributing to projects on OpenLaw.  What are the best ways for users to help to contribute to the OpenLaw ecosystem?
 
We are building a repository of legal agreements on openlaw.io, and we want our members to edit and contribute to the legal agreements on our platform.  If you are interested in working on projects on OpenLaw, please create an account on openlaw.io to access our template repository where you will be able to upload new agreements, edit existing agreements, and comment on other OpenLaw members’ agreements.  Additionally, you can contribute to our work on template conversion at [https://conversion.openlaw.io/](https://conversion.openlaw.io/).

## FIRST DRAFT

### How do I automate a legal agreement?
                                    
You can automate your legal agreement by creating a First Draft on OpenLaw.  Create a First Draft by: (1) creating a template, (2) marking up the template using our [open source markup language](https://docs.openlaw.io/markup-language/), and (3) inserting a smart contract component.

*Create a Template*

You can create a template by [uploading a document](https://app.openlaw.io/upload) or [starting a template from scratch](https://app.openlaw.io/new_template?default=).  If you would like to upload an existing document, simply click on the drop-down menu and under “Agreements,” click on “Upload a New Agreement.”  Once you are on the ‘Upload a New Agreement’ page, you will be able to either drag and drop your file or browse your computer to upload the file onto our site.  After you upload the file, enter the file name and click ‘save.’ At the moment, OpenLaw is compatible with Microsoft Word and plain text, and we are working on giving you the ability to upload PDFs as well.
                                                
If you’d prefer to not upload a document, you can create a template by clicking on the drop-down menu and under ‘Agreements,’ click on ‘Start a New Template.’  Here you get a blank slate to draft whatever agreement you would like to. You can also copy and paste an agreement in this space.

*Mark up your Template*

Once you have uploaded your agreement, create your First Draft using our [open source markup language](https://docs.openlaw.io/markup-language/).  Any word or phrase can be turned into a variable by simply including double brackets around it.  For Example, [[Party A Name]] or [[Party A Address: Address]] will allow you to fill in Party A’s name and address in the template.

*Insert Smart Contract Component*

On OpenLaw, you can execute smart contract code by embedding a smart contract call in any template.  On the template toolbar [see: </>], you are able to choose from various smart contract calls including a one-time payment call, a token (ERC-20) transfer, an escrow assignment, a recurring payment, an arbitration assignment, or a custom component.  To learn more about how to embed and execute smart contracts using OpenLaw’s toolkit, click [here](https://docs.openlaw.io/markup-language/#smart-contracts).

### How do I link separate templates together?
 
Using OpenLaw’s open source markup language, you can also link separate documents together into a “[deal](https://docs.openlaw.io/markup-language/#deals).”  Linking documents allows you to create a document package in which you to fill in variables across multiple templates saving you valuable time.  Check out OpenLaw’s markup language to learn how to do so.

### What is the open source markup language?  Is it difficult to learn if I don’t have a technical background?

Our [open source markup language](https://docs.openlaw.io/markup-language/) provides the tools necessary to create truly programmable legal agreements.  Currently, OpenLaw’s markup language supports if → then logic, aliasing, multi-variable expressions, hidden variables, and can even perform basic calculations.  The markup language provides an easy way for anyone to automate legal prose and trigger an Ethereum-based smart contract to manage contractual promises.

We have designed our markup language to be user-friendly and easy to use.  Non-technical members of our team spent a few hours on it and were able to get the hang of it quickly.

### How do I see when and what agreements have been uploaded?
                                                
Once you upload an agreement, it is saved and available in the drop-down menu under ‘All Templates.’  You can search for the agreement by the name created upon saving the Agreement.

### Should I mark up the agreement in Microsoft Word or on the OpenLaw website?
                                                
We recommend marking up your agreement on the OpenLaw website.  Once an agreement is uploaded onto OpenLaw, you can mark it up by clicking the ‘Edit’ button on the toolbar located at the top of the agreement.

If you prefer to use Microsoft Word, you can mark it up there and then copy and paste that into OpenLaw’s website upon completion. 

### How to I view contracts if I’ve already signed and sent?
 
Under the “Manage” tab on the drop-down menu, click on the ‘Contract Management’ section.  The ‘Contract Management’ section gives users the ability to have oversight over what contracts have been executed and recorded on the Ethereum blockchain.  

Currently, the contract management tool gives you the following information: contract drafted by the user, the signatories of the contract (including the status of who has signed), and a date and time stamp of when the contract was created.  You will also have access to download a Word copy and a JSON file of the agreement there as well. 

We are working on adding more features to the contract management tool.  We plan to automate and provide notifications to contract parties (e.g., send notifications of a contract renewal period, log terms of enforceability, etc.).
 
### How do I view draft of an agreement I’ve started to fill out?
 
Under the ‘Manage’ tab on the drop-down menu, click on the ‘Draft Management’ section.  This section gives users the ability to view drafts of agreements they started. Draft agreements are those that have not been executed by the parties. As of now, the draft management tool gives you the following information: agreement in draft form, the signatories of the agreement, and a date and time stamp of when the draft agreement was created.  You also have access to download a JSON file of the agreement as well.

## SIGN AND STORE

### How does the OpenLaw signature process work?
 
On OpenLaw, agreements can be signed electronically.  To do this, include the requisite markup language identity variable in your agreement template.  It will likely look like the following: [[Signatory Email: Identity]]. Once a party receives an email notification to sign an agreement, that party will see a button that states “Sign Agreement.”  There is a drop-down carrot that allows you to “Sign with MetaMask” as well. Once the party clicks on the ‘Sign Agreement’ or “Sign with MetaMask” button, the signature is then recorded in both the agreement and on the Ethereum blockchain.
 
### How can you confirm the identity of the counter-signatory?
                                                
Right now, OpenLaw confirms identity through email login and password.  Eventually we plan to confirm identity by leveraging a third party identity solution.

### What is a fully executed OpenLaw contract?
 
A contract is represented by a contract definition, which is a JSON object that contains the hash of each template used in the contract, all the parameters, and all of the edited paragraphs.  A fully executed contract is a contract definition plus the list of all the events that has happened to it (i.e. signatures, executions, etc.). The PDF, Word HTML version of the contract is a representation of this contract.

## FORMS AND FLOW

### How do I use Forms & Flow?

# TOKEN FORGE & COMPONENTS

### How can I generate tokenized assets on OpenLaw? 

An OpenLaw template can incorporate a call into any pre-existing smart contract, including smart contracts to generate a token. To use a pre-existing smart contract,   1) click the “Insert Smart Contract Component” button on the Action Bar (“</>”) 2) Select “Custom Component”,  3) in the field “Call Name” give a name to the call to be referenced within the OpenLaw template, 4) Select the “Network” from the dropdown menu where your smart contract is currently deployed 5) In the “Contract Address” field insert the address of the smart contract 6) In “Application Binary Interface (ABI) field, cut and paste the ABI for the one function on the smart contract you intend to call (Note: you do not need the ABI for the entire contract), 7) In “Function Name” field, this must exactly match the name of the smart contract call in the ABI field.  In the future, OpenLaw has plans to include pre-built smart contract components to forge your own ERC20 and ERC721 tokens within an OpenLaw template. 
RELAYER

### Are OpenLaw Agreements private? 
 
At OpenLaw, we understand that some agreements are meant to be private.  Because of this, we’ve given users the ability to have their own private version of OpenLaw in order to keep agreements out of public view.  The documents on Private Instances are not shared on openlaw.io.  To get you started, we prepopulate Private Instances with a few frequently used agreements from openlaw.io such as NDAs and Employee Onboarding agreements.

### How do I request a Private Instance?         
                        
You can request a private instance by clicking on the ‘Private Instance’ tab at the top of openlaw.io’s homepage.  Once you click on the link, you will be redirected to a page to request your Private Instance. Click on ‘Request a Private Instance’ and fill out the relevant information.  Note that the link is only visible if you are logged out.

### Can I link multiple emails to my Private Instance?
 
If you would like add additional email addresses to your Private Instance, click on the drop-down menu and go to ‘Admin Tools.’  Once you click on the link, you will be able to add additional emails to the Private Instance. If you are unable to access the ‘Admin Tools’ tab, simply request that Admin on the Private Instance follow the aforementioned steps to add your email address.
