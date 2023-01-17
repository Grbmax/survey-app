import { InferGetServerSidePropsType } from "next";

type Cards = {
    survey_id : string
    survey_title : string
}

export const getStaticProps = async () => {
    const res = await fetch(`http://localhost:3000/api/survey`)
    const cards: Cards[] = await res.json()
    return {
        props: {
            cards,
        },
    }
}

function List({ cards }: InferGetServerSidePropsType<typeof getStaticProps>) {
    // for(var i = 0; i < Object.keys(cards).length; i++)
    // {
    //     console.log(cards[i])
    // 
    return(
        <div>
        {
            cards.map((card) => <>
            <div className="flex flex-row justify-center items-center h-80">
            <h1>{card.survey_title}</h1>
            </div>
            </>
            )
        }
        </div>
    )
}

export default List