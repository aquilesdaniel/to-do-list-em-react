import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchparams] = useSearchParams();
  const title = searchparams.get("title");
  const description = searchparams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] space-y-4 justify-self-center">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 bottom-1.5 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da tarefa</Title>
        </div>

        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-xl text-white font-bold">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
