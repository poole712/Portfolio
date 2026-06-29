import "@andypf/json-viewer"
import  products from "../assets/products.json"

export function PharmAssist() {
  return (
    <>
      <div className="container-fluid px-3 px-lg-4 py-4 pharmassist-page d-flex justify-content-center">
        <div className="d-flex flex-column flex-xl-row gap-4 w-100 h-100 justify-content-center" style={{ maxWidth: "1600px" }}>
          <div className="pharmassist-main position-relative z-2">
            <iframe
              src="https://poole712-chemistassist.hf.space"
              className="pharmassist-iframe"
              title="PharmAssist RAG Demo"
            ></iframe>
          </div>
          <div className="pharmassist-sidebar my-bg rounded-2 p-3 z-2">
            <h3>About PharmAssist</h3>
            <p>
              PharmAssist is a pharmacy/chemist assistant that provides customers an easy way to find what
              the chemist has and what could help through a chat interface. <br /><br />By using a RAG (Retrieval-Augmented Generation)
              system we can query information about a range of products that are unique to our 'business'.
              When a user asks for a particular thing and its not something the 'business' has then RAG can find something similar
              or if nothing found can fallback on the LLM to respond appropriately.
              <br /><br />I have included the data to view under the stack table.
            </p>
            <table className="table table-striped table-bordered table-sm m-1 stack-table">
              <thead className="fs-5 fw-bold">Stack</thead>
              <tbody>
                <tr>
                  <td>LLM Model:</td>
                  <td>gpt-4o-mini</td>
                </tr>
                <tr>
                  <td>Vector DB:</td>
                  <td>ChromaDB</td>
                </tr>
                <tr>
                  <td>Embedding Model:</td>
                  <td>OpenAI Text Embedding 3 Small</td>
                </tr>
                <tr>
                  <td>User Interface:</td>
                  <td>Gradio</td>
                </tr>
                <tr>
                  <td>Hosting Platform:</td>
                  <td>Hugging Face Spaces</td>
                </tr>
              </tbody>
            </table>
            <p className="fs-5 fw-bold">Data:</p>
            <andypf-json-viewer theme="summerfruit-light" expanded={false} data={products}></andypf-json-viewer>
          </div>
        </div>
      </div>
    </>
  );
}
