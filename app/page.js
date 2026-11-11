export default async function Home() {
  const respuesta = await fetch("http://localhost:5213/api/todoitem");
  const tareas = await respuesta.json();
  console.log(tareas.map((tarea) => (tarea.id)));
  console.log(tareas.map((tarea) => (tarea.title)));
  
  return (
      <div className="mt-5">{tareas.map((tarea) =>(
          <div className="bg-gray-200 mb-4" key={tarea.id}>{tarea.title}</div>
      ))}</div>
  );

}
