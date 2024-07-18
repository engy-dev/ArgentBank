import {createGlobalStyle} from "styled-components";

const Changenamestyle = createGlobalStyle`
.headerchangename{
    display: flex;
    flex-direction: column;
    margin-left: 30%;
    width: 40%;
    flex-wrap: wrap;
    &>h1{
        margin: 3.5% 0% 0.5% 0%
    }
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
    height: 90%;
}

.savebutton, .cancelbutton{
    margin-left: 2%;
    color: #5256ec;
    border: solid 1px #5256ec;
    border-radius: 3px;
    width: 25%;
}

.headerchangename>h1{
    color: white;
}

.hidden{
  display:none;
}
`

export default Changenamestyle;