import NoteListItem from "../../components/NoteListItem/NoteListItem";
import "./NoteList.css"

export default function NoteList({ notes }) {
  console.log(notes)
  let noteListItem;
  if (notes.length > 0) {
      noteListItem = notes.map((n, idx) => (
      <NoteListItem n={n} key={idx} />
      ));
    } else noteListItem  = <h1>No Notes Yet</h1>

  return (
    <>
      <div className="NoteList">{noteListItem}</div>
    </>
  )
}
