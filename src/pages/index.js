import React, {useState} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default () => {

    let [number, setNumber] = useState(0)

    const data = useStaticQuery(graphql`
    {
        site {
          siteMetadata {
            description
            title
          }
        }
      }
    `)


    return(
    <div>
        Hello Gatsby BRAAAASS!
        <br/>
        <Link to="/AnotherPage">Hopefully this takes me there?</Link>
        <p>{data.site.siteMetadata.title}</p>
    <p>{number}</p>
    <button
    onClick={()=> setNumber(number+1)}
    >Witness THat Gatsby Is Better THan React!</button>
    </div>
    )
}
