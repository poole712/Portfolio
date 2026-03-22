export default function AboutMe() {
  return (
    <div className="p-5 text-center bg-body-tertiary rounded-3 vh-100">
      <img
        src="/Me2.png"
        alt="Bootstrap Logo"
        width="200"
        height="200"
        className="rounded rounded-circle border border-dark border-3"
      />
      <h1 className="text-body-emphasis fs-2 m-3">About me</h1>{" "}
      <p className="col-lg-6 mx-auto fs-4 text-muted m-3">
        Hi Im Fletcher/Fletch! I am a web developer who is currently studying to
        become a full stack engineer. In my free time I love to work on games.
        Below are links to game portfolio website and my social medias if you would like to
        reach out!
      </p>
    </div>
  );
}
