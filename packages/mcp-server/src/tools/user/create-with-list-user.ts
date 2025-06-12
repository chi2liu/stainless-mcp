// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'first-stainless-mcp-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import FirstStainlessMcp from 'first-stainless-mcp';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/user/createWithList',
  operationId: 'createUsersWithListInput',
};

export const tool: Tool = {
  name: 'create_with_list_user',
  description: 'Creates list of users with given input array',
  inputSchema: {
    type: 'object',
    properties: {
      items: {
        type: 'array',
        items: {
          $ref: '#/$defs/user',
        },
      },
    },
    $defs: {
      user: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
          },
          email: {
            type: 'string',
          },
          firstName: {
            type: 'string',
          },
          lastName: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
          phone: {
            type: 'string',
          },
          username: {
            type: 'string',
          },
          userStatus: {
            type: 'integer',
            description: 'User Status',
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: FirstStainlessMcp, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.user.createWithList(body));
};

export default { metadata, tool, handler };
