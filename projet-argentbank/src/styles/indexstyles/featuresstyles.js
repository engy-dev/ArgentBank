import {createGlobalStyle} from "styled-components";


const Featuresstyle = createGlobalStyle`
.features {
  display: flex;
  flex-direction: column;
}

@media (min-width: 920px) {
  .features {
    flex-direction: row;
  }
}

.feature-icon {
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
}

.feature-item {
  flex: 1;
  padding: 2.5rem;
}

.feature-item-title {
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
`

export default Featuresstyle;