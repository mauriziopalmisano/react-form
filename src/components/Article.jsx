


function Article({
    id = 0,
    title = 'Titolo',
    content = 'Contenuto'
}) {
  return (
    <>
        <h3>{title}</h3>
        <p>{content}</p>
    </>
  )
}
export default Article