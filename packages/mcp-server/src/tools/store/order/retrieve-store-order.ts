// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'first-stainless-mcp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import FirstStainlessMcp from 'first-stainless-mcp';

export const metadata: Metadata = {
  resource: 'store.order',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/store/order/{orderId}',
  operationId: 'getOrderById',
};

export const tool: Tool = {
  name: 'retrieve_store_order',
  description:
    'For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.',
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
  return asTextContentResult(await client.store.order.retrieve(orderId));
};

export default { metadata, tool, handler };
