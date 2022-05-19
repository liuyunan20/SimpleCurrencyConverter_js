const planets = ["Earth", "Jupiter", "Neptune"];   

function showPlanets(planets) {
  function display(name) {
      console.log(name);
  }
  planets.forEach(display);
}