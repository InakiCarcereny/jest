export function Form() {
  return (
    <>
      <h1>Form</h1>
      <h2>This is a form</h2>
      <p>This is a paragraph</p>

      <span title="age">This is a span</span>

      <img src="image.png" alt="Image" />

      <div data-testid="custom-element">Custom element</div>

      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="example@example.com" />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
