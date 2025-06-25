# 🚄 Railway Track Crack Detection System

## 🔍  Problem Statement

Railway transportation is the lifeline of many countries, especially in developing regions. However, track failures—particularly due to **undetected cracks**are one of the leading causes of **train derailments**. These incidents cause:

- Loss of life  
- Cargo damage  
- Infrastructure losses  
- Severe delays and disruptions  

Manual inspections are still predominantly used, especially in rural and industrial regions. This method is:

- **Time-consuming** – only possible at intervals  
- **Prone to human error** – visual inspections can miss fine or internal cracks  
- **Cost-intensive** – especially over long stretches of track  
- **Not real-time** – failures may only be detected after serious damage  

👉 Hence, there's a **critical need for an automated, real-time, low-cost, and low-power system** for detecting track cracks and preventing derailments.

---

## 🎯  Objective

To design and implement an **IoT-based railway track crack detection system** with the following goals:

- Detect cracks in real-time using sensor feedback  
- Alert authorities instantly through cloud dashboard notifications  
- Tag location of the defect using GPS  
- Use **LoRa technology** for long-range, low-power communication  
- Operate independently in low-connectivity zones (e.g., rural tracks)  
- Be **scalable, solar-powered**, and **cost-effective** for mass deployment  

---

## 🧠  Research Insights

| **Area**             | **Key Findings**                                                                 |
|----------------------|----------------------------------------------------------------------------------|
| **Existing Solutions** | High-end systems (ultrasonic, LIDAR, image processing) are too expensive for rural use |
| **Manual Inspections** | Still dominant; infrequent, requires trained staff, risk-prone                  |
| **Challenges Identified** | - Human fatigue and errors  
  - Limited inspection intervals  
  - No automatic data logging  
  - Delayed response due to manual reporting |
| **Target Areas**      | - Rural stretches  
  - Bridge tracks  
  - Freight sidings         |
| **Required Features** | - Offline logging  
  - Remote alerts  
  - Long battery life       |

---

## ⚙️ System Architecture

### 🔧 Components Used

| **Component**             | **Description**                                                      |
|---------------------------|----------------------------------------------------------------------|
| **Ultrasonic Sensor (HC-SR04)** | Measures distance to detect gaps or cracks on the rail surface      |
| **Infrared Sensor (IR Pair)**   | Detects surface discontinuity or gap by reflectivity               |
| **ESP32**        | Microcontroller unit for data processing and sensor control        |
| **GPS Module (NEO-6M)**        | Acquires real-time geographical coordinates                         |
| **LoRa SX1278 Module**         | Sends data over long distances (1–3 km) to a base/cloud station     |
| **Solar Panel + Battery**      | Ensures uninterrupted, eco-friendly power supply                    |
| **Cloud Integration (Firebase)** | Dashboard display of alerts and data           |

### 🔁 Data Flow & Workflow Diagram
📌 *(Add system architecture image here if available or request one to be generated)*

#### ➤ Sensor Monitoring
- Ultrasonic and IR sensors continuously monitor the track  
- Readings taken every few seconds for real-time analysis

#### ➤ Crack Detection Logic
- If distance variation exceeds a threshold → `CRACK DETECTED`  
- Microcontroller logs timestamp, crack info, and GPS location  

#### ➤ Data Transmission
- LoRa sends alert to a nearby LoRa receiver  
- Receiver connected to cloud (via Raspberry Pi / ESP32 with Wi-Fi)  

#### ➤ Cloud Alert Dashboard
- Firebase/ThingsBoard shows location, time, and status  
- Alerts can be sent via **SMS/Email** through third-party services  

---

## 🔍  Case Study Scenario

### 📍 **Corridor**: Coimbatore – Palakkad Freight Route

#### Background:
- Track stretch crosses **rural and hilly regions**  
- Manual inspections done **monthly**  
- Rail accidents in past due to **undetected rail wear**  

#### Prototype Setup:
- Ultrasonic sensors at every **100m**  
- 1 microcontroller setup monitored a **1 km** stretch  
- LoRa receiver connected to **Firebase dashboard**  

#### Event Simulation:
- Artificial surface crack created (4mm depth)  
- System detected deviation in sensor reading  

#### Result:
- **Crack Detected** and **Alert Triggered** within **10 seconds**  
- Cloud dashboard updated with timestamp and GPS  
- Power module lasted **2 days continuously** using solar  

---

## 💡  Future Enhancements

| **Feature**                  | **Description**                                                       |
|------------------------------|------------------------------------------------------------------------|
| AI/ML Crack Recognition       | Use **camera + TensorFlow Lite** on ESP32-CAM to classify cracks      |
| Edge Analytics               | Use ML on microcontroller for adaptive threshold detection             |
| Vibration/Acoustic Sensors   | Detect **internal issues** before surface cracks appear                |
| Offline Logging              | Save data locally in SD card; sync when reconnected                    |
| Railway Integration          | Connect dashboard to **Railway SMS/Email alert** system                |
| Mesh LoRa Network            | Use mesh topology for wider coverage and signal redundancy             |

---

##  Team

- Nakulan R  
- Megavarshini N  
- Suchithra S  
- Thirumukilan M
---

> 🔖 *This project represents an accessible, scalable, and eco-conscious solution to modernizing railway safety in underserved regions.*
