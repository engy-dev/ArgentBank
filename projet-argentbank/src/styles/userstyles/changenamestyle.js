import {createGlobalStyle} from "styled-components";

const Changenamestyle = createGlobalStyle`

.changenameform{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 40%;
    justify-content: space-around;
    margin: auto;
    padding-bottom: 3%;
}

.input-wrapper{
    width: 45%;
    margin-bottom: 3%;
    height: 4vh;
}

label, input{
    width: 90%;
    border-radius: 5px;
    height: 90%;
    margin: 0 auto;
}

.edit_buttons{
    display: flex;
    flex-direction: row;
    justiify-content: space-between;
    width: 100%;
    padding-right: 1%;
}

.savebutton, .cancelbutton{
    color: #5256ec;
    border: solid 1px #5256ec;
    border-radius: 3px;
    width: 30%;
    height: 3.5vh;
    margin: 0 auto;
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
        width: 30%;
        height: 3.5vh;
    }

    .savebutton, .cancelbutton{
        width: 10%;
        height: 4vh;
    }
}
`

export default Changenamestyle;