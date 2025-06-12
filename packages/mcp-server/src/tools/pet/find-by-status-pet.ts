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
  httpPath: '/pet/findByStatus',
  operationId: 'findPetsByStatus',
};

export const tool: Tool = {
  name: 'find_by_status_pet',
  description: 'Multiple status values can be provided with comma separated strings',
  inputSchema: {
    type: 'object',
    properties: {
      status: {
        type: 'string',
        description: 'Status values that need to be considered for filter',
        enum: ['available', 'pending', 'sold'],
      },
    },
  },
};

export const handler = async (client: FirstStainlessMcp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.pet.findByStatus(body));
};

export default { metadata, tool, handler };
