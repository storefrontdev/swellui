const colors = [
  {
    name: "Black",
    hex: "#000000",
  },
  {
    name: "White",
    hex: "#ffffff",
  },
  {
    name: "Red",
    hex: "#ff0000",
  },
  {
    name: "Green",
    hex: "#00ff00",
  },
  {
    name: "Rose",
    hex: "#ff00ff",
  },
  {
    name: "Navy",
    hex: "#000080",
  },
  {
    name: "Orange",
    hex: "#ff7f00",
  },
  {
    name: "Brown",
    hex: "#a52a2a",
  },
]

const getColor = (name: string) => {
  const color = colors.find((color) => color.name === name)
  return color?.hex
}


export { colors, getColor}