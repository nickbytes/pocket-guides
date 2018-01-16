export const guides = [
  {
    id: 1,
    name: "Distortion in the Cascades",
    description:
      "This is a good rough, intense setup. You can hold chords or play single notes to get a very different feel. Modulating the envelope randomly while playing cords makes for a nice unexpected distorted riff.",
    colors: ["blue", "blue"],
    knobs: [
      {
        id: 1,
        valueTime: "10:30",
        valuePercentage: 30,
        modulate: false
      },
      {
        id: 2,
        valueTime: "12:00",
        valuePercentage: 50,
        modulate: true
      },
      {
        id: 3,
        valueTime: "12:00",
        valuePercentage: 50,
        modulate: false
      },
      {
        id: 4,
        valueTime: "8:00",
        valuePercentage: 15,
        modulate: false
      }
    ]
  }
];
