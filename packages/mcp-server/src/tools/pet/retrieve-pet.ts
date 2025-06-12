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
  httpPath: '/pet/{petId}',
  operationId: 'getPetById',
};

export const tool: Tool = {
  name: 'retrieve_pet',
  description: 'Returns a single pet',
  inputSchema: {
    type: 'object',
    properties: {
      petId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: FirstStainlessMcp, args: Record<string, unknown> | undefined) => {
  const { petId, ...body } = args as any;
  return asTextContentResult(await client.pet.retrieve(petId));
};

export default { metadata, tool, handler };
