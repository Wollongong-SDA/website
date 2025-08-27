import { createDirectus, rest, } from '@directus/sdk';

type Location = {
  id: number;
  status: string;
  sort: number;
  content: string;
  background: string;
  logo: string;
  name: string;
  slug: string;
  overview: string;
}

type Schema = {
  locations: Location[];
}

const directus = createDirectus<Schema>(import.meta.env["CMS_BASE"]).with(rest());

export default directus;