
import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const {
  REACT_APP_CONTENTFUL_TOKEN: CONTENTFUL_TOKEN,
  REACT_APP_CONTENTFUL_SPACE: CONTENTFUL_SPACE,
  REACT_APP_CONTENTFUL_ENVIRONMENT: CONTENTFUL_ENVIRONMENT,
} = process.env;

const client = createClient({
  space: CONTENTFUL_SPACE,
  accessToken: CONTENTFUL_TOKEN,
  environment: CONTENTFUL_ENVIRONMENT,
  host: `preview.contentful.com`,
});

export const useContentfulRequest = (contentType, url) => {
  const [request, setRequest] = useState({ loading: false, data: [], finished: false });

  useEffect(() => {
      setRequest({ loading: true, data: [], finished: false })
      client.getEntries({ content_type: contentType, 'fields.pathUrl': url, include: 2 })
      .then(entry => {
        setRequest({ loading: false, data: entry.items, finished: true });
      })
      .catch(() => {
        setRequest({ loading: false, data: [], finished: false });
      });
  }, [contentType, url]);

  return request;
}
