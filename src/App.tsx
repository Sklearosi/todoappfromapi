import { useEffect, useState } from "react";
import axios from "axios";
import { TodoTask } from "./types.d";
function App() {
  const [task, setTask] = useState<string>("");
  const [todo, setTodo] = useState<TodoTask[]>([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://sqltodoapp.onrender.com/api/tasks"
      );

      console.log(response.data);
      setTodo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    
  }, []);

  const insert = async () => {
    try {
      const response = await axios.post(
        "https://sqltodoapp.onrender.com/api/tasks",
        { task: task, active: true },
        {
          headers: {
            Authorization: "Bearer rnd_SgkERpAX8npk0GmuBnhAywYMXR1R",
          },
        }
      );

      console.log(response);
      
    } catch (error) {
      console.log(error);
    }

    getData()
  };

  return (
    <div>
      <div
        style={{ backgroundImage: "url(images/bg-mobile-light.jpg)" }}
        className=" h-[200px] w-full absolute bg-cover bg-center -z-10"
      ></div>
      <div className=" w-[327px] flex m-auto justify-between items-center pt-6">
        <h1 className=" text-white text-3xl tracking-[10px] font-[900]">
          TODO
        </h1>
        <img className=" w-5 h-5 -mt-1" src="images/icon-moon.svg" alt="" />
      </div>
      <div className="top-0 bg-white w-[327px] m-auto mt-10 h-12 rounded-xl shadow-shadowForFirst flex justify-left items-center">
        <label
          className=" ml-3 w-5 h-5 rounded-full border border-[background: linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)]"
          htmlFor="for-task"
        ></label>
        <input
          className=" hidden"
          type="checkbox"
          name=""
          id="for-task"
          onChange={insert}
        />
        <input
          className=" h-5 outline-none text-[#9495A5] placeholder:text-[#9495A5] text-[12px] text-left ml-3 font-[400]"
          placeholder="Create a new todo…"
          type="text"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
      </div>
      <div className=" bg-white rounded-xl h-auto w-[327px] m-auto mt-5 shadow-shadowForFirst">
        <ul>
          {todo.map((tsk) => {
            return (
              <li
                className=" h-12 m-auto flex justify-left items-center border-b border-[#E3E4F1] "
                key={tsk.id}
              >
                <div className="w-[287px] m-auto flex justify-between items-center">
                  <div className="flex items-center">
                    <label
                      className="w-5 h-5 rounded-full border border-[background: linear-gradient(135deg, #55DDFF 0%, #C058F3 100%)]"
                      htmlFor={tsk.task}
                      onClick={async () => {
                        try {
                          const updatedTask = { ...tsk, active: !tsk.active };
                          const response = await axios.put(
                            `https://sqltodoapp.onrender.com/api/tasks/${tsk.id}`,
                            updatedTask
                          );

                          console.log(response);
                          getData();
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    ></label>
                    <input className="hidden" type="checkbox" id={tsk.task} />
                    <p
                      className={` ml-2 text-[400] text-[12px]  ${
                        tsk.active ? "text-[#494C6B]" : "text-[#D1D2DA] line-through"
                      }`}
                    >
                      {tsk.task}
                    </p>
                  </div>
                  <img
                    onClick={async () => {
                      try {
                        const response = await axios.delete(
                          `https://sqltodoapp.onrender.com/api/tasks/${tsk.id}`
                        );

                        console.log(response);
                        
                        const updatedTodo = todo.filter((task) => task.id !== tsk.id);
                        setTodo(updatedTodo);
                        
                      } catch (error) {
                        console.log(error);
                      }
                      
                    }}
                    className=" w-3 h-3"
                    src="images/icon-cross.svg"
                    alt=""
                  />
                </div>
              </li>
            );
          })}
        </ul>
        <div className=" h-12 flex w-[287px] m-auto justify-between items-center text-[400] text-[12px] text-[#9495A5]">
          <p>items left {todo.length}</p>
          <p onClick={async () => {
                      try {
                        const response = await axios.delete(
                          `https://sqltodoapp.onrender.com/api/clear-tasks`
                        );
                        console.log(response);
                        const updatedTodo = todo.filter((task) => task.active);
                        setTodo(updatedTodo);
                        
                      } catch (error) {
                        console.log(error);
                      }
                      
                    }}>Clear Completed</p>
        </div>
      </div>
      <div className=" bg-white rounded-xl h-12 w-[327px] m-auto mt-5 shadow-shadowForFirst text-[700] text-[14px] text-[#9495A5] flex justify-center items-center gap-10">
        <p >All</p>
        <p>Acitve</p>
        <p>Completed</p>
      </div>
    </div>
  );
}

export default App;
