# BAMBA-MVP

<p align="center">
<strong>This project is now  in progress...</strong>
</p>

## :clapper: Preview

<p align="center">
<strong>Currently, there is no preview...</strong>
</p>

## :scroll:Table of Contents

1. [Requirement Analysis](#black_nib-requirement-analysis)
    1. [Entities](#black_joker-entities)
    1. [Type of Users](#busts_in_silhouette-type-of-users)
    1. [Functional Requirements](#wrench-functional-requirements)
    1. [Non Functional Requirements](#electric_plug-non-functional-requirements)
1. [Design](#straight_ruler-design)
    1. [Prototype](#church-prototype)
    1. [SQL Database](#cd-sql-database)

## :black_nib: Requirement Analysis

### :black_joker: Entities

The MVP will consider 2 entities.

| Entities |
| :-: |
| [User](#user) |
| [Neighborhood](#neighborhood) |
| [Street](#street) | 

#### User
See this section to know more about the [Entity User](#busts_in_silhouette-type-of-users).

#### Neighborhood
It will contain all the streets in the area, together with the safety index. 

#### Street
It will contain all the necessary information to identify the streets and will be associated with the Bamba index.

### :busts_in_silhouette: Type of Users

This version of the application does not differentiate between different types of users. Therefore, only the unregistered user will be available.

| Type of User | Attributes |
| :-: | :-- |
| Unregistered User | It can interact with all the application |

### :wrench: Functional Requirements

The different functionalities will be shown together with the type of user that can perform the action:

| User Histories | Type | Unregistered User | 
| :-- | :-: | :-: |
| UH-01 Access to map  | Essential | :heavy_check_mark: |
| UH-02 Select map type | Essential | :heavy_check_mark: |
| UH-03 View neighborhood safety index | Essential | :heavy_check_mark: |
| UH-04 View street BAMBA index | Essential | :heavy_check_mark: |
| UH-05 Select index view | Essential | :heavy_check_mark: |
| UH-06 Search Localization | Optional | :heavy_check_mark: |
| UH-07 Calculate safe route | Optional | :heavy_check_mark: |
| UH-08 Display estimated time | Optional | :heavy_check_mark: |
| UH-09 Display route guide | Optional | :heavy_check_mark: |
| UH-10 Emergency mode | Optional | :heavy_check_mark: |
| UH-11 Call 112 | Optional | :heavy_check_mark: |

### :electric_plug: Non Functional Requirements

The various quality requirements that the application must meet:

| Non Functional Requirements |
| :-: |
| Oriented to smarth phones |
| The app must run in Andorid and iOS |
| The software must be implemented with React |
| The applicaction need to connect with SQL Database |
| GUI must be minimalist and user-friendly |
| Responsive Design |
| Usability & Accesibility |
| Main language must be Spanish |

## :straight_ruler: Design

### :church: Prototype

The different screens of the prototype to be presented by the MVP:

<p align="center">
  <img src="/docs/prototype/main_screen_prototype.png" alt="Main Screen Prototype">
  <br>
  <small>Figure 1. Main Screen Prototype</small>
</p>

### :cd: Database

The purpose of this database is to manage all Neighborhood and Street information. 

<p align="center">
  <img src="/docs/diagrams/SQL-DB.svg" alt="SQL Database">
  <br>
  <small>Entity Relation Diagram 1. SQL Database</small>
</p>



