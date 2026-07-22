import "@andypf/json-viewer"

export function SupermarketSelector() {
  return (
    <>
      <div className="container-fluid px-3 px-lg-4 py-4 pharmassist-page d-flex justify-content-center">
        <div className="d-flex flex-column flex-xl-row gap-4 w-100 h-100 justify-content-center" style={{ maxWidth: "1600px" }}>
          <div className="pharmassist-main position-relative z-2">
            <iframe
              src="https://poole712-supermarketselector.hf.space"
              className="pharmassist-iframe"
              title="SupermarketSelector Demo"
            ></iframe>
          </div>
          <div className="pharmassist-sidebar my-bg rounded-2 p-3 z-2">
            <h3>About SupermarketSelector</h3>
            <p>
              Supermarket Selector is a supermarket assistant that provides customers an easy way to find what
              Supermarket is offering the best prices for essential grocery items. It finds the best overall price from the big 3 major supermarkets in NZ.
              Through the use of careful agent prompt engineering and the provision of tools I have created a working way of automating this. 
              However, the agent is not perfect and can make mistakes. It is a work in progress and I will continue to improve it over time.
              Playwright through MCP
               is used to scrape the data from the supermarkets websites and then the agent uses this data to find the best prices for the items requested.
            </p>
            <table className="table table-striped table-bordered table-sm m-1 stack-table">
              <thead className="fs-5 fw-bold">Stack</thead>
              <tbody>
                <tr>
                  <td>LLM Model:</td>
                  <td>gpt-5.4-mini</td>
                </tr>
                <tr>
                  <td>Agent Framework:</td>
                  <td>LangChain: create_agent</td>
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
          </div>
        </div>
      </div>
    </>
  );
}
