




function Form({
    submit,
    change,
    article,
    isEditing 
}) {



    return (
        <>
            <form className="row" onSubmit={submit}>
                <div className="col-6">
                    <div>
                        <label htmlFor="titolo">Titolo articolo</label>
                        <input onChange={change} type="text" id="titolo" name="title" value={article.title}/>
                    </div>
                    <div>
                        <label htmlFor="contenuto">Testo dell'articolo</label>
                        <input onChange={change} type="text" id="contenuto" name="content" value={article.content}/>
                    </div>
                    <button className="btn btn-primary" type="submit">{isEditing ? 'Aggiorna Articolo' : 'Aggiungi Articolo'}</button>
                </div>
            </form>
        </>
    )
}
export default Form