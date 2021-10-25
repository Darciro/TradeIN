import {Button, Dropdown, DropdownButton, Form} from "react-bootstrap";

function MainSearch() {
    return (
        <div id="main-search" className="main-search my-5">
            <form className="form-group d-block rounded-pill">
                <div className="row align-items-center">
                    <div className="col-md-5 pe-0">
                        <div className="input-group input-group-lg border-end-md border-light">
                            <input id="search-query" className="form-control" type="text" placeholder="Oque procuras?"/>
                        </div>
                    </div>

                    <div className="col-md-5 d-flex justify-content-around ps-0">
                        <DropdownButton id="city" title="Aonde procuras?">
                            <Dropdown.Item href="#/action-1">Lisboa</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Porto</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">São Paulo</Dropdown.Item>
                        </DropdownButton>

                        <DropdownButton id="type" title="Gostarias de?">
                            <Dropdown.Item href="#/action-1">Comprar</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Trocar</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Alugar</Dropdown.Item>
                        </DropdownButton>
                    </div>

                    <div className="col-md-2">
                        <button className="btn btn-primary btn-lg w-100 rounded-pill" type="button">Pesquisar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MainSearch;