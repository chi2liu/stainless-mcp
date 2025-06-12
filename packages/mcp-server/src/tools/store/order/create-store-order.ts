// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'first-stainless-mcp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import FirstStainlessMcp from 'first-stainless-mcp';

export const metadata: Metadata = {
  resource: 'store.order',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/store/order',
  operationId: 'placeOrder',
};

export const tool: Tool = {
  name: 'create_store_order',
  description: 'Place a new order in the store',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      complete: {
        type: 'boolean',
      },
      petId: {
        type: 'integer',
      },
      quantity: {
        type: 'integer',
      },
      shipDate: {
        type: 'string',
        format: 'date-time',
      },
      status: {
        type: 'string',
        description: 'Order Status',
        enum: ['placed', 'approved', 'delivered'],
      },
    },
  },
};

export const handler = async (client: FirstStainlessMcp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.store.order.create(body));
};

export default { metadata, tool, handler };
