--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: logs; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.logs (
    id integer NOT NULL,
    date text,
    description text,
    value text,
    "userId" integer,
    operation text
);


--
-- Name: logs_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.logs_id_seq OWNED BY public.logs.id;


--
-- Name: records; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.records (
    id integer NOT NULL,
    date text,
    description text,
    value text,
    "userId" integer
);


--
-- Name: records_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.records_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: records_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.records_id_seq OWNED BY public.records.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer,
    token text
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text,
    email text,
    password text
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: logs id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.logs ALTER COLUMN id SET DEFAULT nextval('public.logs_id_seq'::regclass);


--
-- Name: records id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.records ALTER COLUMN id SET DEFAULT nextval('public.records_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: logs; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.logs VALUES (1, '27/06', 'aposta', '10', 3, 'in');
INSERT INTO public.logs VALUES (2, '27/06', 'Churras', '23.00', 3, 'in');
INSERT INTO public.logs VALUES (3, '27/06', 'Comprar comida', '30.00', 3, 'out');
INSERT INTO public.logs VALUES (4, '27/06', 'Ganhei no truco', '50.99', 3, 'in');


--
-- Data for Name: records; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.records VALUES (1, '27/06', 'aposta', '10', 3);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 3, 'afe1496c-2123-4666-ba67-4681ac9a9081');
INSERT INTO public.sessions VALUES (2, 3, 'd5490a9b-83c9-452c-b57d-1d2811c112f9');
INSERT INTO public.sessions VALUES (3, 3, 'c2c88337-5806-4824-bc36-129a05144bb4');
INSERT INTO public.sessions VALUES (4, 3, 'c8005a90-f792-4aa4-bd52-6ecb8d5c57c4');
INSERT INTO public.sessions VALUES (5, 3, '7e5aaf9b-406a-4e42-b34a-6678aeec51ee');
INSERT INTO public.sessions VALUES (6, 3, 'b68d723d-8c27-4735-8bbe-dc42954514c3');
INSERT INTO public.sessions VALUES (7, 3, 'eca11ae0-e3ed-4173-a896-f4949583f242');
INSERT INTO public.sessions VALUES (8, 3, '37fd44ab-f55f-4d40-81fd-c498747e17ee');
INSERT INTO public.sessions VALUES (9, 3, '664f94a1-3b74-4a5c-aaa8-d4a4f0c8c5c2');
INSERT INTO public.sessions VALUES (10, 3, 'd5cf1005-057b-4256-823a-923042c8c2ec');
INSERT INTO public.sessions VALUES (11, 3, 'ac5568c9-7614-462a-8db8-5485771508e6');
INSERT INTO public.sessions VALUES (12, 3, '3b25d069-5e87-49de-a0ff-e112e201ce66');
INSERT INTO public.sessions VALUES (13, 3, '81115be5-d0a7-427a-81e7-6896971cce52');
INSERT INTO public.sessions VALUES (14, 3, '87571bf2-33f4-4038-85c9-9fdc6718adf4');
INSERT INTO public.sessions VALUES (15, 3, 'd559468b-1d51-4d52-bc42-5edeab5e62fb');
INSERT INTO public.sessions VALUES (16, 3, 'b5fa58e8-6dae-4aaa-af55-e5239103f8b4');
INSERT INTO public.sessions VALUES (17, 3, 'f15788b8-e8fa-46f5-82e8-1b3a9d14310b');
INSERT INTO public.sessions VALUES (18, 3, 'f1254c9c-093f-4e05-ad7c-ccba6eca1aa4');
INSERT INTO public.sessions VALUES (19, 3, '5d1e3453-4e90-403e-8047-8551abdb0fe1');
INSERT INTO public.sessions VALUES (20, 3, 'c63a6237-fae6-497c-a1e7-57e49fdc8b4c');
INSERT INTO public.sessions VALUES (21, 3, '000ea09b-3ddc-48a2-8b3b-4a53a3140e02');
INSERT INTO public.sessions VALUES (22, 3, 'eeb67b23-4f26-4926-853f-c54027f93b86');
INSERT INTO public.sessions VALUES (23, 3, 'c217bf4d-f8cc-4309-abf9-25016d41fd2b');
INSERT INTO public.sessions VALUES (24, 3, '2a945a2b-c950-4dcd-81a4-38fb636d906c');
INSERT INTO public.sessions VALUES (25, 3, '7aa72a56-75e9-4901-8029-934f235d1744');
INSERT INTO public.sessions VALUES (26, 3, 'd93f7b0e-0606-4e61-a16e-f0270712fba8');
INSERT INTO public.sessions VALUES (27, 3, '5bd6be6b-cc12-4d43-9716-92645523cdcb');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'JOAO', 'teste@teste.com', '$2b$10$6Shls8whPGvsSlKSTGtLd.9veu5cpu79L2xaz/8iwBFjGlhHUWkFC');
INSERT INTO public.users VALUES (2, 'José', 'teste2@teste.com', '$2b$10$WsCqe7ad7QchQ7juALmEc.8LuMTd6Si3lmwVicPlTo91eFJ0MpMhq');
INSERT INTO public.users VALUES (3, 'Daniel', 'daniel@teste.com', '$2b$10$2B4LYCDUjznEFC8EnCTTiOrS1eMWl6XdMjh3SCzGVzwtf90DQX1S.');


--
-- Name: logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.logs_id_seq', 4, true);


--
-- Name: records_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.records_id_seq', 1, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 27, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- PostgreSQL database dump complete
--

