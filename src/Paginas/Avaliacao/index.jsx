import { Link } from "react-router-dom";
import { BsArrowRight, BsStarFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

export default function Avaliacao() {
    const [estrelas , setEstrelas] = useState(0)

    const estrelaUm = useRef("")
    const estrelaDois = useRef("")
    const estrelaTres = useRef("")
    const estrelaQuatro = useRef("")
    const estrelaCinco = useRef("")

    useEffect(()=>{
        if(estrelas === 0){
            estrelaUm.current.classList.remove("estrelaAtivada")
            estrelaUm.current.style.color = "#E3E1E4"
            estrelaDois.current.style.color = "#E3E1E4"
            estrelaTres.current.style.color = "#E3E1E4"
            estrelaQuatro.current.style.color = "#E3E1E4"
            estrelaCinco.current.style.color = "#E3E1E4"
        } else if(estrelas === 1){
            estrelaUm.current.style.color = "#d4983e"
            estrelaDois.current.style.color = "#E3E1E4"
            estrelaTres.current.style.color = "#E3E1E4"
            estrelaQuatro.current.style.color = "#E3E1E4"
            estrelaCinco.current.style.color = "#E3E1E4"
        }
         else if(estrelas === 2){
            estrelaUm.current.style.color = "#d4983e"
            estrelaDois.current.style.color = "#d4983e"
            estrelaTres.current.style.color = "#E3E1E4"
            estrelaQuatro.current.style.color = "#E3E1E4"
            estrelaCinco.current.style.color = "#E3E1E4"
        }
         else if(estrelas === 3){
            estrelaUm.current.style.color = "#d4983e"
            estrelaDois.current.style.color = "#d4983e"
            estrelaTres.current.style.color = "#d4983e"
            estrelaQuatro.current.style.color = "#E3E1E4"
            estrelaCinco.current.style.color = "#E3E1E4"
        }
         else if(estrelas === 4){
            estrelaUm.current.style.color = "#d4983e"
            estrelaDois.current.style.color = "#d4983e"
            estrelaTres.current.style.color = "#d4983e"
            estrelaQuatro.current.style.color = "#d4983e"
            estrelaCinco.current.style.color = "#E3E1E4"
        }
         else if(estrelas === 5){
            estrelaUm.current.style.color = "#d4983e"
            estrelaDois.current.style.color = "#d4983e"
            estrelaTres.current.style.color = "#d4983e"
            estrelaQuatro.current.style.color = "#d4983e"
            estrelaCinco.current.style.color = "#d4983e"
        }
        console.log("Número atual de estrelas: "+estrelas)
    },[estrelas])

    function setaAvaliacao(valor){
        return valor != estrelas ?() => setEstrelas(valor) : () => setEstrelas(0)
    }

  return (
    <>
      <section className="bg-cor-branco rounded-t-[24px] shadow-2xl shadow-[#14113B] rounded-b-[24px]">
        <div className="w-[410px] h-[184px] flex justify-center rounded-t-[20px] bg-gradient-to-r from-[#4455b2] to-[#502c9e]">
            <img className="relative -mt-[48px]" src="/Relogio.png" alt="Imagem do Smartwatch Amazfit Bip U Pro" />
        </div>

        <div className="w-[410px] h-[376px] py-[48px] flex flex-col ">
          <div className="w-[314px] h-[184px] flex flex-col m-auto ">
            <h1 className="text-cor-preto text-[20px] font-bold text-center">
              Avalie o produto
            </h1>

            <h2 className="text-center text-cor-cinzaEscuro">O que você achou do produto</h2>
            <h2 className="text-cor-roxoEscuro flex justify-center">Smartwatch Amazfit Bip U Pro <p className="text-cor-cinzaEscuro">?</p></h2>

            <div className="my-[32px]">
                <ul className="flex justify-between">
                    <li ref={estrelaUm} className="containerEstrela" onClick={ setaAvaliacao(1) }><BsStarFill className="estrela"/></li>
                    <li ref={estrelaDois} className="containerEstrela" onClick={ setaAvaliacao(2) }><BsStarFill className="estrela"/></li>
                    <li ref={estrelaTres} className="containerEstrela" onClick={ setaAvaliacao(3) }><BsStarFill className="estrela"/></li>
                    <li ref={estrelaQuatro} className="containerEstrela" onClick={ setaAvaliacao(4) }><BsStarFill className="estrela"/></li>
                    <li ref={estrelaCinco} className="containerEstrela" onClick={ setaAvaliacao(5) }><BsStarFill className="estrela"/></li>
                </ul>
              <ul className="flex text-[12px] justify-between text-cor-cinza px-2">
                <li>Ruim</li>
                <li>Ótimo</li>
              </ul>
            </div>
          </div>
          <Link
            to="/comentario"
            className="flex m-auto items-center bg-cor-roxoClaro hover:bg-cor-roxoEscuro text-cor-branco px-6 font-medium justify-between  rounded-lg w-[314px] h-[56px]"
          >
            Confirmar <BsArrowRight className="text-[25px]" />
          </Link>
        </div>
      </section>
    </>
  );
}
