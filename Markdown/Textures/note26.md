# Notes On "Integrating Physics-based and Data-Driven Methods to Accurately Model Haptic Textures"  Steeven Villa


## Feb 2018

### Changes

- Not to use panthom to record textures, use instead another mechanism:
    * Easier linear control
    * Less induced vibrations
* Option: CD unit open/close mechanism

### Materials Required
- [x] Accelerometers 
    - ADXL335 **[ABD2016]** ±3g Analog
    - ADXL321 **[MDC2013] [CUL2014]** ±18g Analog
    - MMA7362 **[DSV2018]** ±3g Analog
    - LIS344ALH **[CUL2017]** ±6g
- [ ] Force Sensor  {Waiting for quotation ATI} 
    -  Nano17, ATI Technologies **[ABD2016] [MDC2013] [CUL2014]** (Smallest commercially available 6-axis transducer in the world) 
    -  ~~Resistive~~
    -  ~~PiezoElectric~~
- [x] Capture Motion.
    - ~~Hand Free~~
    - ~~Phantom~~
    - Own mechanism -Stepper [4cm measurements]
- [ ] Render.
    - Linear Resonant Actuator --> Haptuator **[DSV2018] [CUL2017] [CUL2014]**
    - Voice Coil. **[MCM2014] [TAK2012]**
    - Piezoelectric. **[MEY2014]**
- [x] Device to measure tool velocity 
    - trakStar position/orientation sensor **[MDC2013] [CUL2014]**
    - Phantom Premium **[ABD2016]** 
    - Phantom Touch **[STR2014]**
    - We could try to use the device that dennis is using.**[DSV2018]**
- [x] Acquisition board
    - NI DAQ  **[ABD2016] [MDC2013] [CUL2014]** 16 bit
    - AT-atmega32u4 **[CUL2017]** 10 bit
    - ATmega 2556 **[DSV2018]** 10 bit

### To-Do

* [ ] Design Abase that holds the Mechanism.
* [ ] Adapt Accelerometer
* [ ] Try to control just with a microcontroller.
* [ ] How perpendicular force will be induced? To simulate hand force.
    * Spring (Force is constant?)

### General Notes

We need to simplify material list, I Recomend to develop all only in a test material. and then extend to other materials

The work of McDonald try to match a mathematical model with recorded data adjusting a bunch of parameters.

Abdulali uses phantom (PRO) to record Anisotropic textures

### Bibliography

* [ABD2016] Abdulali, Arsen, and Seokhee Jeon. (2016)."Data-driven modeling of anisotropic haptic textures: data segmentation and interpolation." International Conference on Human Haptic Sensing and Touch Enabled Computer Applications. Springer, Cham, 2016. https://doi.org/10.1007/978-3-319-42324-1

* [CUL2014] Culbertson, H., Unwin, J., & Kuchenbecker, K. J. (2014). Modeling and rendering realistic textures from unconstrained tool-surface interactions. IEEE Transactions on Haptics, 7(3), 381–393. https://doi.org/10.1109/TOH.2014.2316797

* [CUL2017] Culbertson, H., & Kuchenbecker, K. J. (2017). Importance of matching physical friction, hardness, and texture in creating realistic haptic virtual surfaces. IEEE Transactions on Haptics, 10(1), 63–74. https://doi.org/10.1109/TOH.2016.2598751

* [DSV2018] Salazar, D. S, Maciel, A. (2018) Integrating Physics-based and Data-Driven Methods to Accurately Model Haptic Textures

* [MCD2013] McDonald, C. G., & Kuchenbecker, K. J. (2013). Dynamic simulation of tool-mediated texture interaction. 2013 World Haptics Conference, WHC 2013, 307–312. https://doi.org/10.1109/WHC.2013.6548426

* [MCM2014] W. McMahan and K. J. Kuchenbecker. (2014) “Dynamic modeling and control of voice-coil actuators for high-fidelity display of haptic vibrations,” in Proc. IEEE Haptics Symp., Feb. 2014, pp. 1115–122.

* [MEY2014] Meyer, D. J., Wiertlewski, M., Peshkin, M. A., & Colgate, J. E. (2014). Dynamics of ultrasonic and electrostatic friction modulation for rendering texture on haptic surfaces. IEEE Haptics Symposium, HAPTICS, 63–67. https://doi.org/10.1109/HAPTICS.2014.6775434

* [TAK2012] Y. Takeuchi, S. Kamuro, K. Minamizawa, and S. Tachi (2012). “Haptic duplicator,” in Proc. ACM Virtual Reality International Conference. New York, NY, USA: ACM, 2012.

* [STR2014] Strese, M., Lee, J. Y., Schuwerk, C., Han, Q., Kim, H. G., & Steinbach, E. (2014). A haptic texture database for tool-mediated texture recognition and classification. 2014 IEEE International Symposium on Haptic, Audio and Visual Environments and Games, HAVE 2014 - Proceedings, 118–123. https://doi.org/10.1109/HAVE.2014.6954342

