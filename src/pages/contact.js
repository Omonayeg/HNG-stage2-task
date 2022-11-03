export default function Contact() {
  return (
    <div>
      <form>
        <label for="firstname">first name</label>
        <input type="text" name="firstname" placeholder="first name" />

        <label for="lastname">last name</label>
        <input type="text" name="lastname" placeholder="last name" />

        <label for="email">email</label>
        <input type="email" name="email" placeholder="example@gmail.com" />

        <label for="msg">Leave a commment</label>
        <textarea name="msg" id="" cols="30" rows="10"></textarea>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
