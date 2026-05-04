




function Form({
    submit,
    change
}) {



    return (
        <>
            <form className="row" onSubmit={submit}>
                <div className="col-6">
                    <div>
                        <label htmlFor="titolo">Titolo articolo</label>
                        <input onChange={change} type="text" id="titolo" name="title"/>
                    </div>
                    <div>
                        <label htmlFor="contenuto">Testo dell'articolo</label>
                        <input onChange={change} type="text" id="contenuto" name="content"/>
                    </div>
                    <button className="btn btn-primary" type="submit">Aggiungi articolo</button>
                </div>
            </form>
        </>
    )
}
export default Form