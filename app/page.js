export default async function Home() {
  const respuesta = await fetch("http://localhost:5213/api/todoitem");
  const tareas = await respuesta.json();
  console.log(tareas.title);
  
  return (
      <div>{tareas.map((tarea) =>(
          <div key={tarea.id}>{tarea.title}</div>
      ))}</div>
  );

}
