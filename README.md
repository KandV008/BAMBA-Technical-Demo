# BAMBA - Technical Demo

BAMBA is a mobile application that guides users through a city using a series of parameters that measure the safety of its streets (it is measured with the BAMBA index).

This project is a **technical demo**.

## :scroll:Table of Contents

1. [Usage](#hammer-usage)
    1. [Steps](#paw_prints-steps)
    1. [Requirements](#wrench-requirements)
    1. [Configure Google Cloud API](#cloud-configure-google-cloud-api)
1. [Requirement Analysis](#black_nib-requirement-analysis)
    1. [Functional Requirements](#wrench-functional-requirements)
    1. [Non Functional Requirements](#electric_plug-non-functional-requirements)
1. [Design](#straight_ruler-design)
    1. [Prototype](#church-prototype)
    1. [Preview](#house-preview)
    1. [SQL Database](#cd-sql-database)
1. [What I Have Learned?](#v-what-have-i-learned)
1. [License](#libra-license)

## :hammer: Usage

The steps to follow to use the application locally will be described.

### :paw_prints: Steps

1. Clone the repository.

```
git clone gh repo clone KandV008/BAMBA-Technical-Demo
cd BAMBA-MVP
```

2. Configure [Google Cloud API](#cloud-configure-google-cloud-api).
3. Create ``.env`` with the next enviromental variable ``EXPO_PUBLIC_GOOGLE_MAPS_KEY``. It have to store your Google Cloud API Key.
4. Open your Android Emulator (You can use the one that comes with [Android Studio](https://developer.android.com/studio)).
5. Install dependencies.
```
npm install
```
6. Start application.

```
npx expo start
```

7. Press ``a`` to open the application with Android.
8. Have fun!

### :wrench: Requirements

| Software Requirements |
| :-: |
| [Expo SDK 51](https://expo.dev/changelog/2024/05-07-sdk-51) |
| [Node.js](https://nodejs.org/en)|
| [Google Cloud Platform Account](https://cloud.google.com) |

### :cloud: Configure Google Cloud API

An active Google Cloud Platform account is required to use the application.

APIs required for operation:
- [Places API (New)](https://console.cloud.google.com/apis/library/places.googleapis.com)
- [Directions API](https://console.cloud.google.com/apis/library/directions-backend.googleapis.com)

## :black_nib: Requirement Analysis

In these sections the system requirements will be discussed.

### :wrench: Functional Requirements

The different functionalities will be shown together with the type of user that can perform the action:

| User Histories | Type | Done? | 
| :-- | :-: | :-: |
| UH-01 Access to map  | Essential | :heavy_check_mark: |
| UH-02 Select map type | Essential | :heavy_check_mark: |
| UH-03 View street BAMBA index | Essential | :heavy_plus_sign::heavy_minus_sign: |
| UH-04 Search Localization | Optional | :heavy_check_mark: |
| UH-05 Calculate safe route | Optional | :heavy_plus_sign::heavy_minus_sign: |
| UH-06 Display estimated time | Optional | :heavy_multiplication_x: |
| UH-07 Display route guide | Optional | :heavy_multiplication_x: |
| UH-8 Emergency mode | Optional | :heavy_multiplication_x: |
| UH-9 Call 112 | Optional | :heavy_check_mark: |
| UH-10 Add Cuestionary | Optional | :heavy_check_mark: |

#### :warning: Explanations

- **UH-03 View Street BAMBA Index** -> The data used is inside a TypeScript file. It was generated using [OpenStreetMap](https://www.openstreetmap.org/#map=16/40.44829/-4.00341) and complete with random BAMBA indexes. There was no way to save the data in the Google Cloud Platform and access it.
- **UH-05 Calculate safe route** -> Due to foregoing fact, it was not possible to calculate the route using this data, because the API uses data stored in Google Cloud. The calculated routes are the standard option.

### :electric_plug: Non Functional Requirements

The various quality requirements that the application must meet:

| Non Functional Requirements |
| :-: |
| Oriented to smarth phones |
| The app must run in Andorid and iOS |
| The software must be implemented with React |
| GUI must be minimalist and user-friendly |
| Responsive Design |
| Usability & Accesibility |
| Main language must be Spanish |

## :straight_ruler: Design

These sections will show the design of the system.

### :church: Prototype

The different screens of the prototype to be presented by the demo:

<p align="center">
  <img src="/docs/prototype/main_screen_prototype.png" alt="Main Screen Prototype">
  <br>
  <small>Figure 1. Main Screen Prototype</small>
</p>

This was made with [Figma](https://www.figma.com/es-es/). You can see the complete prototype by [clicking here](https://www.figma.com/design/yzFtQpFiT7eUsAsPPYZVig/Prototipo-BAMBA?node-id=0-1).

### :house: Preview

The different screens of the preview from the demo:

<p align="center">
  <img src="/docs/preview/main_screen_preview.png" alt="Main Screen Prototype">
  <br>
  <small>Figure 2. Main Screen Preview</small>
</p>

### :cd: Database

There is no database. The format to work is with GeoJSON files. 

See [data.ts](./lib/data.ts) for a example of the format.

## :v: What have I learned?

* The Expo framework
* Navigate between screens using Expo
* Working with Google Cloud Platform
* Creation of navigation routes
* Creation of Datasets to represent them on a map

## :libra: License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

