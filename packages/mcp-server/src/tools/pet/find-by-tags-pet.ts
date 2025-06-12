// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'first-stainless-mcp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FirstStainlessMcp from 'first-stainless-mcp';

export const metadata: Metadata = {
  resource: 'pet',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/pet/findByTags',
  operationId: 'findPetsByTags',
};

export const tool: Tool = {
  name: 'find_by_tags_pet',
  description:
    'Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.',
  inputSchema: {
    type: 'object',
    properties: {
      tags: {
        type: 'array',
        description: 'Tags to filter by',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = async (client: FirstStainlessMcp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.pet.findByTags(body));
};

export default { metadata, tool, handler };
