import { data } from "../utils/constans.js";

function Animals({ selectedAnimal }) {
  let animal = data.find((item) => {
    return item.name === selectedAnimal;
    // cambie const for let para que se pueda cambiar mas abajo su valor
  });
  animal = animal?.image
    ? animal // aca es un conditional operator antes de que termine el anterior, si es animal (valor definido) usa el selectedAnimal value, pero si es un valor indefinido, entonces aplica otro find() method al data object.
    : data.find((item) => {
        return item.name === "default";
      }); // dificl explicacion: si tipeo un valor definido, entonces vuelve a la funcion de arriba con let animal. Pero si no lo encuentra aplica otra vez el find method y le asigna el valor "default"
  return <img src={animal.image} alt={animal.name} />;
}

export default Animals;
