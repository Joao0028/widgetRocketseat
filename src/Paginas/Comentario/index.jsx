import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

export default function Comentario(){
    return <>
      <section className="bg-cor-branco rounded-t-[24px] shadow-2xl shadow-[#14113B] rounded-b-[24px]">
        <div className="w-[410px] h-[184px] flex justify-center rounded-t-[20px] bg-gradient-to-r from-[#4455b2] to-[#502c9e]">
            <img className="relative -mt-[48px]" src="/Relogio.png" alt="Imagem do Smartwatch Amazfit Bip U Pro" />
        </div>

        <div className="w-[410px] h-[376px] py-[48px] flex flex-col ">
          <div className="w-[314px] h-[184px] flex flex-col m-auto ">
            <h1 className="text-cor-preto text-[20px] font-bold text-center">
              Deixe um comentário
            </h1>

            <h2 className="text-center text-cor-cinzaEscuro">Conte sobre o motivo da sua avaliação</h2>

            <textarea name="mensagem" style={{resize: "none"}} className="bg-cor-brancoEscuro p-2 mt-3 rounded-lg h-[120px] border-solid border-cor-brancoEscuro border-[1px] focus:border-cor-roxoEscuro placeholder:text-cor-cinza" placeholder="Escreva aqui seu comentário"></textarea>
            </div>

            <Link
            to="/"
            className="flex m-auto items-center bg-cor-roxoClaro hover:bg-cor-roxoEscuro text-cor-branco px-6 font-medium justify-between  rounded-lg w-[314px] h-[56px]"
          >
            Enviar <BsArrowRight className="text-[25px]" />
          </Link>
            </div>

        </section>
    </>
}