var vertices = [
  // Bagian 1 F (atas)
  -0.3, 0.4, -0.1,  // 0
  0, 0.4, -0.1,  // 1
  0, 0.5, -0.1,  // 2
  -0.3, 0.5, -0.1,  // 3
  -0.3, 0.4, 0.1,  // 4
  0, 0.4, 0.1,  // 5
  0, 0.5, 0.1,  // 6
  -0.3, 0.5, 0.1,  // 7

  // Bagian 2 F (bawah)
  -0.3, 0, -0.1,  // 8
  -0.2, 0, -0.1,  // 9
  -0.2, 0.4, -0.1,  // 10
  -0.3, 0.4, -0.1,  // 11
  -0.3, 0, 0.1,  // 12
  -0.2, 0, 0.1,  // 13
  -0.2, 0.4, 0.1,  // 14
  -0.3, 0.4, 0.1,  // 15

 // Bagian 3 F (bawah)
 -0.2, 0.3, -0.1,  // 0
 0, 0.3, -0.1,  // 1
 0, 0.2, -0.1,  // 2
 -0.2, 0.2, -0.1,  // 3
 -0.2, 0.3, 0.1,  // 4
 0, 0.3, 0.1,  // 5
 0, 0.2, 0.1,  // 6
 -0.2, 0.2, 0.1,  // 7

  // Bagian 1 A (kiri)
  0.1, 0, -0.1,  // 16
  0.2, 0, -0.1,  // 17
  0.2, 0.5, -0.1,  // 18
  0.1, 0.5, -0.1,  // 19
  0.1, 0, 0.1,  // 20
  0.2, 0, 0.1,  // 21
  0.2, 0.5, 0.1,  // 22
  0.1, 0.5, 0.1,  // 23

  // Bagian 2 A (kanan)
  0.3, 0, -0.1,  // 24
  0.4, 0, -0.1,  // 25
  0.4, 0.5, -0.1,  // 26
  0.3, 0.5, -0.1,  // 27
  0.3, 0, 0.1,  // 28
  0.4, 0, 0.1,  // 29
  0.4, 0.5, 0.1,  // 30
  0.3, 0.5, 0.1,  // 31

  // Bagian 3 A (atas)
  0.2, 0.4, -0.1,  // 32
  0.3, 0.4, -0.1,  // 33
  0.3, 0.5, -0.1,  // 34
  0.2, 0.5, -0.1,  // 35
  0.2, 0.4, 0.1,  // 36
  0.3, 0.4, 0.1,  // 37
  0.3, 0.5, 0.1,  // 38
  0.2, 0.5, 0.1,  // 39

  // Bagian 4 A (bawah)
  0.2, 0.1, -0.1,  // 40
  0.3, 0.1, -0.1,  // 41
  0.3, 0.2, -0.1,  // 42
  0.2, 0.2, -0.1,  // 43
  0.2, 0.1, 0.1,  // 44
  0.3, 0.1, 0.1,  // 45
  0.3, 0.2, 0.1,  // 46
  0.2, 0.2, 0.1,  // 47
];
//   -0.5, -0.5, -0.5,  // 0
//   0.5, -0.5, -0.5,  // 1
//   0.5,  0.5, -0.5,  // 2
//  -0.5,  0.5, -0.5,  // 3
//  -0.5, -0.5,  0.5,  // 4
//   0.5, -0.5,  0.5,  // 5
//   0.5,  0.5,  0.5,  // 6
//  -0.5,  0.5,  0.5   // 7


var triangles = [
 // F atas
  0, 1, 2,  // Front
  0, 2, 3,
  1, 5, 6,  // Right
  1, 6, 2,
  4, 5, 6,  // Back
  4, 6, 7,
  0, 4, 7,  // Left
  0, 7, 3,
  3, 2, 6,  // Top
  3, 6, 7,
  0, 1, 5,  // Bottom
  0, 5, 4,

  // F tengah
  8, 9, 10,  // Front
  8, 10, 11,
  9, 13, 14,  // Right
  9, 14, 10,
  12, 13, 14,  // Back
  12, 14, 15,
  8, 12, 15,  // Left
  8, 15, 11,
  11, 10, 14,  // Top
  11, 14, 15,
  8, 9, 13,  // Bottom
  8, 13, 12,

  // F bawah
  16, 17, 18,  // Front
  16, 18, 19,
  17, 21, 22,  // Right
  17, 22, 19,
  20, 21, 22,  // Back
  20, 22, 23,
  16, 20, 23,  // Left
  16, 23, 19,
  19, 18, 22,  // Top
  19, 22, 23,
  16, 17, 21,  // Bottom
  16, 21, 20,

  // A kiri 
  24, 25, 26,  // Front
  24, 26, 27,
  25, 29, 30,  // Right
  25, 30, 27,
  28, 29, 30,  // Back
  28, 30, 31,
  24, 28, 31,  // Left
  24, 31, 27,
  27, 26, 30,  // Top
  27, 30, 31,
  24, 25, 29,  // Bottom
  24, 29, 28,

  // A kanan
  32, 33, 34,  // Front
  32, 34, 35,
  33, 37, 38,  // Right
  33, 38, 35,
  36, 37, 38,  // Back
  36, 38, 39,
  32, 36, 39,  // Left
  32, 39, 35,
  35, 34, 38,  // Top
  35, 38, 39,
  32, 33, 37,  // Bottom
  32, 37, 36,

  // A atas
  40, 41, 42,  // Front
  40, 42, 43,
  41, 45, 46,  // Right
  41, 46, 43,
  44, 45, 46,  // Back
  44, 46, 47,
  40, 44, 47,  // Left
  40, 47, 43,
  43, 42, 46,  // Top
  43, 46, 47,
  40, 41, 45,  // Bottom
  40, 45, 44,

   // A bawah
  48, 49, 50,  // Front
  48, 50, 51,
  49, 53, 54,  // Right
  49, 54, 51,
  52, 53, 54,  // Back
  52, 54, 55,
  48, 52, 55,  // Left
  48, 55, 51,
  51, 50, 54,  // Top
  51, 54, 55,
  48, 49, 53,  // Bottom
  48, 53, 52,

];

var colors = [
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
  
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
  
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
  
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta

    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
  
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta

    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magenta
    0, 0, 1,   // Blue
    1, 0, 1,   // Magen
  


  // 1, 0, 0,  // Red
  // 0, 1, 0,  // Green
  // 0, 0, 1,  // Blue
  // 1, 1, 0,  // Yellow
  // 1, 0, 1,  // Magenta
  // 0, 1, 1,  // Cyan
  // 1, 1, 1,  // White
  // 0, 0, 0,   // Black
  
  // 1, 0, 0,  // Red
  // 0, 1, 0,  // Green
  // 0, 0, 1,  // Blue
  // 1, 1, 0,  // Yellow
  // 1, 0, 1,  // Magenta
  // 0, 1, 1,  // Cyan
  // 1, 1, 1,  // White
  // 0, 0, 0,   // Black

  // 1, 0, 0,  // Red
  // 0, 1, 0,  // Green
  // 0, 0, 1,  // Blue
  // 1, 1, 0,  // Yellow
  // 1, 0, 1,  // Magenta
  // 0, 1, 1,  // Cyan
  // 1, 1, 1,  // White
  // 0, 0, 0,   // Black

  // 1, 0, 0,  // Red
  // 0, 1, 0,  // Green
  // 0, 0, 1,  // Blue
  // 1, 1, 0,  // Yellow
  // 1, 0, 1,  // Magenta
  // 0, 1, 1,  // Cyan
  // 1, 1, 1,  // White
  // 0, 0, 0,   // Black

  // 1, 0, 0,  // Red
  // 0, 1, 0,  // Green
  // 0, 0, 1,  // Blue
  // 1, 1, 0,  // Yellow
  // 1, 0, 1,  // Magenta
  // 0, 1, 1,  // Cyan
  // 1, 1, 1,  // White
  // 0, 0, 0,   // Black

  // 1, 0, 0,  // Red
  // 0, 1, 0,  // Green
  // 0, 0, 1,  // Blue
  // 1, 1, 0,  // Yellow
  // 1, 0, 1,  // Magenta
  // 0, 1, 1,  // Cyan
  // 1, 1, 1,  // White
  // 0, 0, 0,   // Black
];

var indices = triangles;
