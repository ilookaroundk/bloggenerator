from openai import OpenAI
from dotenv import dotenv_values
config = dotenv_values(".env")

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=config.get("OPENROUTER_API_KEY"),
)

def generate_blog(paragraph_topic):
    response = client.chat.completions.create(
        model="nvidia/nemotron-3.5-lightning:free",
        messages=[
            {"role": "user", "content": "Write a paragraph about " + paragraph_topic}
        ],
        max_tokens=2000,
        temperature=0.3
    )
    return response.choices[0].message.content

print(generate_blog("Why NYC is better than your city."))