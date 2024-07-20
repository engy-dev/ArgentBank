import {createGlobalStyle} from "styled-components";

const Changenamestyle = createGlobalStyle`

.changenameform{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 40%;
    justify-content: space-evenly;
    margin: auto;
    padding-bottom: 3%;
}

.input-wrapper{
    width: 50%;
    margin-bottom: 3%;
    height: 4vh;
}

label, input{
    width: 60%;
    border-radius: 5px;
    height: 90%;
}

.savebutton, .cancelbutton{
    color: #5256ec;
    border: solid 1px #5256ec;
    border-radius: 3px;
    width: 15%;
    height: 3.5vh;
}

.headerchangename>h1{
    color: white;
}

.hidden{
  display:none;
}

@media (max-width: 919px) {
    .changenameform{
        width: 100%;
    }

    .input-wrapper{
        width: 44%;
        height: 3.5vh;
    }

    .savebutton, .cancelbutton{
        width: 30%;
        height: 4vh;
    }
}
`

export default Changenamestyle;