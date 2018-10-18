# Ultrahaptics notes.

### Compiling the examples
I compiled the examples, they have conflics with the print functions, when I activate:
```c++
hduPrintError(stderr, &error,  "Error detected while rendering gravity well\n"); 
hduIsSchedulerError(&error)
```
Output:
```
Error | LNK2019 | HelloHapticDevice | C:\OpenHaptics\Developer\3.4.0\examples\HD\console\HelloHapticDevice\hdu.lib(hduError.obj)
```
so I commented that lines and it worked. The error in that example comes from "hdu.lib"

- #### fixed:
 I found the solution in the 3Dsystems forum. I should recompile the utilities for my version of Visual Studio. I done that in the following way:
 1. Go to the Openhaptics installation folder
 2. Search for the utilities directory "Openhaptics/Utilities/src"
 3. Recompile all the libraries for release and debug by now I done just for X86 (included our problematic library hdu)
 4. next I copy and paste to the example folder.
 5. It works

Calibration example shows an similar error but with calibration.obj file. #Trying to fix

# Ultrahaptics paper fast track
#### Keywords found: Ultrahaptics, Airborne, Touch, Textures, Mid-air Haptics, Ultrasound, Haptic display