export default function Bookmarks() {
   fetch('api/auth/bookmarks')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Erreur:', error));

   return <div>Bookmarks</div>;
}
