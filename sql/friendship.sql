DROP TABLE IF EXISTS friendships CASCADE;

CREATE TABLE friendships(
    id SERIAL PRIMARY KEY,
    sender_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    receiver_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    accepted BOOLEAN DEFAULT FALSE NOT NULL
);
