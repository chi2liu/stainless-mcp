// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'first-stainless-mcp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import FirstStainlessMcp from 'first-stainless-mcp';

export const metadata: Metadata = {
  resource: 'store.order',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/store/order/{orderId}',
  operationId: 'deleteOrder',
};

export const tool: Tool = {
  name: 'delete_store_order',
  description:
    'For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors',
  inputSchema: {
    type: 'object',
    properties: {
      orderId: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: FirstStainlessMcp, args: Record<string, unknown> | undefined) => {
  const { orderId, ...body } = args as any;
  await client.store.order.delete(orderId);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
