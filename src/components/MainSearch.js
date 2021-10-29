import {useState, createRef} from 'react';
import {Dropdown, DropdownButton, Form} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faEarthAmericas, faBullseye} from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";

function MainSearch() {
    const history = useHistory();
    const searchInput = createRef();
    const [citySelected, setCitySelected] = useState();
    const [typeSelected, setTypeSelected] = useState();

    function dropdownChangCityeHandler(el) {
        setCitySelected(el.target.text)
    }

    function dropdownChangTypeeHandler(el) {
        setTypeSelected(el.target.text)
    }

    function onFormSubmitHandler(el) {
        el.preventDefault();

        let searchQuery = '/busca/';

        if( citySelected )
            searchQuery = searchQuery + citySelected + '/';

        if( searchInput.current.value )
            searchQuery = searchQuery + searchInput.current.value + '/';

        history.push(searchQuery);
    }

    return (
        <div id="main-search" className="main-search my-5">
            <Form onSubmit={onFormSubmitHandler} className="form-group d-block rounded-pill">
                <div className="row align-items-center">
                    <div className="col-md-5 pe-0">
                        <div className="input-group input-group-lg border-end-md border-light">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="main-search-icon align-self-center"/>
                            <input ref={searchInput} id="search-query" className="form-control" type="text" placeholder="Oque procuras?"/>
                        </div>
                    </div>

                    <div className="col-md-5 d-flex justify-content-around ps-0">
                        <FontAwesomeIcon icon={faEarthAmericas} className="main-search-icon align-self-center"/>
                        <DropdownButton id="city" title={citySelected ? citySelected : 'Aonde procuras?'}>
                            <Dropdown.Item onClick={dropdownChangCityeHandler} href="#/action-1">Lisboa</Dropdown.Item>
                            <Dropdown.Item onClick={dropdownChangCityeHandler} href="#/action-2">Porto</Dropdown.Item>
                            <Dropdown.Item onClick={dropdownChangCityeHandler} href="#/action-3">São Paulo</Dropdown.Item>
                        </DropdownButton>

                        <FontAwesomeIcon icon={faBullseye} className="main-search-icon align-self-center"/>
                        <DropdownButton id="type" title={typeSelected ? typeSelected : 'Gostarias de?'}>
                            <Dropdown.Item onClick={dropdownChangTypeeHandler} href="#/action-1">Comprar</Dropdown.Item>
                            <Dropdown.Item onClick={dropdownChangTypeeHandler} href="#/action-2">Trocar</Dropdown.Item>
                            <Dropdown.Item onClick={dropdownChangTypeeHandler} href="#/action-3">Alugar</Dropdown.Item>
                        </DropdownButton>
                    </div>

                    <div className="col-md-2">
                        <button className="btn btn-primary btn-lg w-100 rounded-pill" type="submit">Pesquisar</button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default MainSearch;