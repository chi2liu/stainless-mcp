// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'first-stainless-mcp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FirstStainlessMcp from 'first-stainless-mcp';

export const metadata: Metadata = {
  resource: 'store',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/store/inventory',
  operationId: 'getInventory',
};

export const tool: Tool = {
  name: 'list_inventory_store',
  description: 'Returns a map of status codes to quantities',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: FirstStainlessMcp, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.store.listInventory());
};

export default { metadata, tool, handler };
