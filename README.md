# Chatbot
# Python, Javascript, Html & Css - Create a ChatGpt Chatbot Website

Create a chatgpt chatbot website using Python as server, Javascript, Html & Css, and Openai. Python is widely used as a server-side language, handling the logic and processing on the server. It's often used with web frameworks like Flask or Django to build the backend of web applications. JavaScript is primarily a client-side language, running in the user's browser.
It's used for enhancing user interfaces, handling events, and making asynchronous requests to the server


[Get in touch via email if you need help](mailto:sissokoadel057@gmail.com)

## Development

1. Clone the repo

```
git clone [github https url]
```

2. Install packages

```
pip install -r requirements
cd [To the locaton of the folder, to chatbot files]
```

3. Set up your `.py` file

- Copy `YourApiKey` into `.py`
  Your `.py` file should look like this:

```
...
OPENAI_API_KEY= YOURAPIKEY
...
```
4. Run the server

- You have to run the server before trying to access the website
  - if not already done
    ```
    cd [To the locaton of the folder, to chatbot files]
    ```
  - Then
    ```
    python chat_server.py
    
    ```
  - Or You can open vscode and run it from there (chat_server.py)
    

- Visit [openai](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key) to retrieve API keys and insert into your `.py` file.
- Visit [supabase](https://supabase.com/) to create a database and retrieve your keys in the user dashboard as per [docs instructions](https://supabase.com/docs)


You can add your custom elements to the metadata to meet your needs, note however that the default loader format as per below expects at least a string for `pageContent` and `metadata` that contains a `source` property as a returned value:

```
async load(): Promise<Document[]>{
  const $ = await this.scrape();
      const text = $("body").text();
    const metadata = { source: this.webPath };
    return [new Document({ pageContent: text, metadata })];
  }

```

## Credit
by [Hkcode](mailto:sissokoadel057@gmail.com)
