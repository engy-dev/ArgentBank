import {createGlobalStyle} from "styled-components";

const Changenamestyle = createGlobalStyle`
.headerchangename{
    display: flex;
    flex-direction: column;
    margin-left: 30%;
    width: 40%;
    flex-wrap: wrap;
}

.changenameform{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    justify-content: center;
    margin: auto;
    padding-bottom: 3%;
}

.input-wrapper{
    width: 40%;
    margin: 3%;
}

label, input{
    width: 100%;
    border-radius: 5px;
}

.savebutton{
    margin-left: 5%;
}

.cancelbutton{
    margin-left: 5%;
}

.headerchangename>h1{
    color: white;
}

.hidden{
  display:none;
}
`

export default Changenamestyle;