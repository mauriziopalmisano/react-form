


function Article({
    id = 0,
    title = 'Titolo',
    content = 'Contenuto',
    remove
}) {


    
  return (
    <>
        <h3>{title}</h3>
        <p>{content}</p>
        <button onClick={() => remove(id)} className="btn btn-primary">Elimina</button>
    </>
  )
}
export default Article